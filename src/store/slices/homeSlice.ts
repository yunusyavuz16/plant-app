import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { categoryService } from '../../services/categoryService';
import { questionService } from '../../services/questionService';
import { Category } from '../../types/category';
import { Question } from '../../types/question';

interface HomeState {
  categories: Category[];
  questions: Question[];
  loading: boolean;
  error: string | null;
}

const initialState: HomeState = {
  categories: [],
  questions: [],
  loading: false,
  error: null,
};

export const fetchHomeData = createAsyncThunk(
  'home/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const [categoriesRes, questionsRes] = await Promise.all([
        categoryService.getCategories(),
        questionService.getQuestions(),
      ]);

      return {
        categories: categoriesRes.data.sort((a, b) => a.rank - b.rank),
        questions: questionsRes,
      };
    } catch (error) {
      return rejectWithValue('Failed to fetch home data');
    }
  }
);

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomeData.fulfilled, (state, action) => {
        state.categories = action.payload.categories;
        state.questions = action.payload.questions;
        state.loading = false;
      })
      .addCase(fetchHomeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default homeSlice.reducer;