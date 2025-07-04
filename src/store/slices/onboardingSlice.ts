import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'onboarding_completed';

interface OnboardingState {
  completed: boolean;
  loading: boolean;
}

const initialState: OnboardingState = {
  completed: false,
  loading: true,
};

export const checkOnboardingStatus = createAsyncThunk(
  'onboarding/checkStatus',
  async () => {
    const flag = await AsyncStorage.getItem(STORAGE_KEY);
    return flag === 'true';
  }
);

export const completeOnboarding = createAsyncThunk(
  'onboarding/complete',
  async () => {
    await AsyncStorage.setItem(STORAGE_KEY, 'true');
    return true;
  }
);

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkOnboardingStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkOnboardingStatus.fulfilled, (state, action) => {
        state.completed = action.payload;
        state.loading = false;
      })
      .addCase(completeOnboarding.fulfilled, (state) => {
        state.completed = true;
      });
  },
});

export default onboardingSlice.reducer;