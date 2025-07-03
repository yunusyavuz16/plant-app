import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { OnboardingProvider } from './src/context/OnboardingContext';
import RootNavigator from './src/navigation/RootNavigator';

// Enable native screens and reanimated
enableScreens(true);

/**
 * Root component registered by Expo.
 */
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <OnboardingProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </OnboardingProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}