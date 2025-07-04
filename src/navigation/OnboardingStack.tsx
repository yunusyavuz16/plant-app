import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '@screens/Onboarding/WelcomeScreen';
import FeaturesScreen from '@screens/Onboarding/FeaturesScreen';
import BenefitsScreen from '@screens/Onboarding/BenefitsScreen';
import PaywallScreen from '@screens/Onboarding/PaywallScreen';

export type OnboardingStackParamList = {
  Welcome: undefined;
  Features: undefined;
  Benefits: undefined;
  Paywall: undefined;
};

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Features" component={FeaturesScreen} />
    <Stack.Screen name="Benefits" component={BenefitsScreen} />
    <Stack.Screen name="Paywall" component={PaywallScreen} />
  </Stack.Navigator>
);

export default OnboardingStack;