import { OnboardingProvider } from "@context/OnboardingContext";
import RootNavigator from "@navigation/RootNavigator";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { enableScreens } from "react-native-screens";

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
