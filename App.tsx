import { NavigationContainer } from "@react-navigation/native";
import { styles } from "App.styles";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useAppPreparation } from "hooks/useAppPreparation";
import React from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import RootNavigator from "./src/navigation/RootNavigator";
import { store } from "./src/store";

// Keep splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const { onLayoutRootView, loaded } = useAppPreparation();

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </View>
      </SafeAreaProvider>
    </Provider>
  );
}
