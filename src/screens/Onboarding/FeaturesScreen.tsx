import { OnboardingScreenKeyType, OnboardingScreens } from "@/constants/screen";
import { TEXTS } from "@/constants/text";
import { OnboardingStackParamList } from "@navigation/OnboardingStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import styles from "./FeaturesScreen.styles";
import OnBoardLayout from "./components/OnBoardLayout";
import OnboardingAction from "./components/OnboardingAction";
import OnboardingHeader from "./components/OnboardingHeader";
import OnboardingMiddleImage from "./components/OnboardingMiddleImage";
import OnboardingPagination from "./components/OnboardingPagination";

/**
 * Second screen in the onboarding flow showing camera feature.
 * Displays how to take photos to identify plants.
 */
const FeaturesScreen: React.FC<
  NativeStackScreenProps<OnboardingStackParamList, "Features">
> = () => {
  return (
    <OnBoardLayout
      screenName={OnboardingScreens.FEATURES as OnboardingScreenKeyType}
    >
      <OnboardingHeader
        screenName={OnboardingScreens.FEATURES as OnboardingScreenKeyType}
      />

      <OnboardingMiddleImage
        screenName={OnboardingScreens.FEATURES as OnboardingScreenKeyType}
        imageStyle={styles.image}
        imageContainerStyle={styles.imageContainer}
      />

      <View style={styles.bottom}>
        <OnboardingAction
          label={TEXTS.ONBOARDING.CONTINUE}
          screenName={OnboardingScreens.BENEFITS as OnboardingScreenKeyType}
          style={styles.buttonContainer}
        />

        <OnboardingPagination currentIndex={0} totalSteps={3} />
      </View>
    </OnBoardLayout>
  );
};

export default FeaturesScreen;
