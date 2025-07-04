import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { checkOnboardingStatus } from "../store/slices/onboardingSlice";
import HomeStack from "./HomeStack";
import OnboardingStack from "./OnboardingStack";

const Stack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
  const dispatch = useAppDispatch();
  const { completed, loading } = useAppSelector((state) => state.onboarding);

  useEffect(() => {
    dispatch(checkOnboardingStatus());
  }, []);

  if (loading) {
    return null; // Or a loading screen
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!completed ? (
          <Stack.Screen name="Onboarding" component={OnboardingStack} />
        ) : (
          <Stack.Screen name="Home" component={HomeStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
