import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import onboardingReducer from "./slices/onboardingSlice";
import homeReducer from "./slices/homeSlice";
import subscriptionReducer from "./slices/subscriptionSlice";

const rootReducer = combineReducers({
  onboarding: onboardingReducer,
  home: homeReducer,
  subscription: subscriptionReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
