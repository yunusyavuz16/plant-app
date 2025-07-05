import { OnboardingScreenKeyType, OnboardingScreens } from "@/constants/screen";
import React from "react";
import { Image, ImageStyle, View, ViewStyle } from "react-native";
import styles from "../WelcomeScreen.styles";

const OnboardingMiddleImages = {
  [OnboardingScreens.WELCOME]: require("../../../../assets/get-started/get-started-middle.png"),
  [OnboardingScreens.FEATURES]: require("../../../../assets/onboarding-1/Content.png"),
  [OnboardingScreens.BENEFITS]: require("../../../../assets/onboarding-2/onboarding-2-middle.png"),
};

interface OnboardingMiddleImageProps {
  screenName: OnboardingScreenKeyType;
  imageStyle?: ImageStyle;
  imageContainerStyle?: ViewStyle;
}

const OnboardingMiddleImage = ({
  screenName,
  imageStyle,
  imageContainerStyle,
}: OnboardingMiddleImageProps) => {
  return (
    <View testID="onboarding-image-container" style={[styles.imageContainer, imageContainerStyle]}>
      <Image
        testID="onboarding-image"
        source={OnboardingMiddleImages[screenName]}
        style={[styles.image as ImageStyle, imageStyle]}
      />
    </View>
  );
};

export default OnboardingMiddleImage;
