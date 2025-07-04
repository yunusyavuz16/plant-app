import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PLAN_TYPES } from "../../constants/plan";

interface SubscriptionState {
  selectedPlan: keyof typeof PLAN_TYPES;
}

const initialState: SubscriptionState = {
  selectedPlan: PLAN_TYPES.YEARLY as keyof typeof PLAN_TYPES,
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    setSelectedPlan: (
      state,
      action: PayloadAction<keyof typeof PLAN_TYPES>
    ) => {
      state.selectedPlan = action.payload;
    },
  },
});

export const { setSelectedPlan } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
