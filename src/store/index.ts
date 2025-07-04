import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import homeReducer from "./slices/homeSlice";
import onboardingReducer from "./slices/onboardingSlice";
import subscriptionReducer from './slices/subscriptionSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    onboarding: onboardingReducer,
    subscription: subscriptionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T>(selector: (state: RootState) => T) =>
  useSelector(selector);
