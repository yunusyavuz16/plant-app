import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import homeReducer from "./slices/homeSlice";
import onboardingReducer from "./slices/onboardingSlice";
import subscriptionReducer from "./slices/subscriptionSlice";
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    home: homeReducer,
    subscription: subscriptionReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
