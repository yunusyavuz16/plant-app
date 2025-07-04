import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import RootNavigator from "./src/navigation/RootNavigator";
import { store } from "./src/store";
import { View, Text, Platform } from "react-native";

export default function App() {
  const [loaded, error] = useFonts({
    Rubik: Platform.select({
      ios: require("./assets/fonts/Rubik-Regular.ttf"),
      android: require("./assets/fonts/Rubik-Regular.ttf"),
    }),
    SFProText: Platform.select({
      ios: require("./assets/fonts/SFProText-Regular.ttf"),
      android: require("./assets/fonts/SFProText-Regular.ttf"),
    }),
    "Rubik-SemiBold": Platform.select({
      ios: require("./assets/fonts/Rubik-SemiBold.ttf"),
      android: require("./assets/fonts/Rubik-SemiBold.ttf"),
    }),
    "SFProText-Bold": Platform.select({
      ios: require("./assets/fonts/SFProText-Bold.ttf"),
      android: require("./assets/fonts/SFProText-Bold.ttf"),
    }),
    "Rubik-ExtraBold": Platform.select({
      ios: require("./assets/fonts/Rubik-ExtraBold.ttf"),
      android: require("./assets/fonts/Rubik-ExtraBold.ttf"),
    }),
    "Rubik-Medium": Platform.select({
      ios: require("./assets/fonts/Rubik-Medium.ttf"),
      android: require("./assets/fonts/Rubik-Medium.ttf"),
    }),
  });

  React.useEffect(() => {
    if (Platform.OS === "android") {
      console.log("Android font loading status:", { loaded, error });
    }
  }, [loaded, error]);

  if (!loaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Loading fonts...</Text>
      </View>
    );
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <RootNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}
