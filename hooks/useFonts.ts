import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";
import { Platform } from "react-native";

export const useAppFonts = () => {
  const [loaded] = useFonts({
    Rubik: Platform.select({
      ios: require("./../assets/fonts/Rubik-Regular.ttf"),
      android: require("./../assets/fonts/Rubik-Regular.ttf"),
    }),
    SFProText: Platform.select({
      ios: require("./../assets/fonts/SFProText-Regular.ttf"),
      android: require("./../assets/fonts/SFProText-Regular.ttf"),
    }),
    "Rubik-SemiBold": Platform.select({
      ios: require("./../assets/fonts/Rubik-SemiBold.ttf"),
      android: require("./../assets/fonts/Rubik-SemiBold.ttf"),
    }),
    "SFProText-Bold": Platform.select({
      ios: require("./../assets/fonts/SFProText-Bold.ttf"),
      android: require("./../assets/fonts/SFProText-Bold.ttf"),
    }),
    "Rubik-ExtraBold": Platform.select({
      ios: require("./../assets/fonts/Rubik-ExtraBold.ttf"),
      android: require("./../assets/fonts/Rubik-ExtraBold.ttf"),
    }),
    "Rubik-Medium": Platform.select({
      ios: require("./../assets/fonts/Rubik-Medium.ttf"),
      android: require("./../assets/fonts/Rubik-Medium.ttf"),
    }),
    "Rubik-Light": Platform.select({
      ios: require("./../assets/fonts/Rubik-Light.ttf"),
      android: require("./../assets/fonts/Rubik-Light.ttf"),
    }),
    "Rubik-Regular": Platform.select({
      ios: require("./../assets/fonts/Rubik-Regular.ttf"),
      android: require("./../assets/fonts/Rubik-Regular.ttf"),
    }),
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Keep splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (loaded) {
      await SplashScreen.hideAsync();
    }
  }, [loaded]);

  return { loaded, onLayoutRootView };
};
