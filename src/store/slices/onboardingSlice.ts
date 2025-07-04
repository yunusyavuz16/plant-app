import { createSlice } from "@reduxjs/toolkit";

interface OnboardingState {
  onboardingComplete: boolean;
}

const initialState: OnboardingState = {
  onboardingComplete: false,
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    completeOnboarding: (state) => {
      state.onboardingComplete = true;
    },
    resetOnboarding: (state) => {
      state.onboardingComplete = false;
    },
  },
});

export const { completeOnboarding, resetOnboarding } = onboardingSlice.actions;

export default onboardingSlice.reducer;