import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingStack from './OnboardingStack';
import HomeStack from './HomeStack';
import { useOnboarding } from '../context/OnboardingContext';

export type RootStackParamList = {
  Onboarding: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Decides whether to show onboarding or the main app.
 */
const RootNavigator: React.FC = () => {
  const { completed } = useOnboarding();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!completed ? (
        <Stack.Screen name="Onboarding" component={OnboardingStack} />
      ) : (
        <Stack.Screen name="Home" component={HomeStack} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;