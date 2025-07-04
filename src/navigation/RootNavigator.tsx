import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useAppSelector } from "../store";
import OnboardingStack from "./OnboardingStack";
import PrivateAppStack from "./PrivateAppStack";

const Stack = createNativeStackNavigator();

/**
 * Root navigator that handles switching between onboarding and main app flows
 * based on whether onboarding has been completed.
 */
const RootNavigator = () => {
  const { onboardingComplete } = useAppSelector((state) => state.onboarding);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!onboardingComplete ? (
        <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
      ) : (
        <Stack.Screen name="PrivateAppStack" component={PrivateAppStack} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
