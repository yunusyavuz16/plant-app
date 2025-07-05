import { OnboardingScreens } from "@/constants/screen";
import React from "react";
import { ImageBackground, View } from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "../WelcomeScreen.styles";

const OnboardgingBackgrounds = {
  [OnboardingScreens.WELCOME]: require("../../../../assets/get-started/get-started-bg.png"),
  [OnboardingScreens.FEATURES]: require("../../../../assets/onboarding-1/Background.png"),
  [OnboardingScreens.BENEFITS]: require("../../../../assets/onboarding-2/Background.png"),
};

interface OnBoardLayoutProps {
  children: React.ReactNode;
  screenName: keyof typeof OnboardingScreens;
}

const OnBoardLayout: React.FC<OnBoardLayoutProps> = ({
  children,
  screenName,
}) => {
  const insets = useSafeAreaInsets();
  const style = getStyle(insets);
  return (
    <ImageBackground
      source={OnboardgingBackgrounds[screenName]}
      style={[styles.backgroundImage, style.backgroundImage]}
      resizeMode="cover"
    >
      <View style={styles.container}>{children}</View>
    </ImageBackground>
  );
};

export default OnBoardLayout;

const getStyle = (insets: EdgeInsets) => {
  return {
    backgroundImage: {
      paddingTop: insets.top + 12,
      paddingBottom: insets.bottom + 12,
    },
  };
};
