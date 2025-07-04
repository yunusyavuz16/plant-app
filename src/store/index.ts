import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import homeReducer from "./slices/homeSlice";
import onboardingReducer from "./slices/onboardingSlice";

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    home: homeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T>(selector: (state: RootState) => T) =>
  useSelector(selector);
