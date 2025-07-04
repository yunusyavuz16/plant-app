import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEYS } from "../../constants/storage";

interface OnboardingState {
  onboardingComplete: boolean;
}

const initialState: OnboardingState = {
  onboardingComplete: false,
};

export const initializeOnboarding = createAsyncThunk(
  "onboarding/initialize",
  async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEYS.ONBOARDING_COMPLETE);
      return value === "true";
    } catch (error) {
      console.warn("Error reading onboarding status:", error);
      return false;
    }
  }
);

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    completeOnboarding: (state) => {
      state.onboardingComplete = true;
      // Persist the state
      AsyncStorage.setItem(STORAGE_KEYS.ONBOARDING_COMPLETE, "true").catch((error) => {
        console.warn("Error saving onboarding status:", error);
      });
    },
    resetOnboarding: (state) => {
      state.onboardingComplete = false;
      // Clear the persisted state
      AsyncStorage.setItem(STORAGE_KEYS.ONBOARDING_COMPLETE, "false").catch((error) => {
        console.warn("Error saving onboarding status:", error);
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initializeOnboarding.fulfilled, (state, action) => {
      state.onboardingComplete = action.payload;
    });
  },
});

export const { completeOnboarding, resetOnboarding } = onboardingSlice.actions;

export default onboardingSlice.reducer;