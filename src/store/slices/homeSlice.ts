import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Image as RNImage } from "expo-image";
import { categoryService } from "../../services/categoryService";
import { questionService } from "../../services/questionService";
import { Category } from "../../types/category";
import { Question } from "../../types/question";
import { checkAndSetPrefetchStatus } from "../../utils/prefetchManager";

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
  "home/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const [categoriesRes, questionsRes] = await Promise.all([
        categoryService.getCategories(),
        questionService.getQuestions(),
      ]);

      const shouldPrefetch = await checkAndSetPrefetchStatus();

      if (shouldPrefetch) {
        // Only prefetch images on first app launch
        for (const item of [...questionsRes]) {
          const uri = item.image_uri;
          await RNImage.prefetch(uri);
        }

        for (const item of [...categoriesRes.data]) {
          const uri = item.image.url;
          await RNImage.prefetch(uri);
        }
      }

      return {
        categories: categoriesRes.data,
        questions: questionsRes,
      };
    } catch (error) {
      return rejectWithValue("Failed to fetch home data");
    }
  }
);

const homeSlice = createSlice({
  name: "home",
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
