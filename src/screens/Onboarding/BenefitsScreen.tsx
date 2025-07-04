import { OnboardingScreenKeyType, OnboardingScreens } from "@/constants/screen";
import { TEXTS } from "@/constants/text";
import { OnboardingStackParamList } from "@navigation/OnboardingStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import styles from "./BenefitsScreen.styles";
import OnBoardLayout from "./components/OnBoardLayout";
import OnboardingAction from "./components/OnboardingAction";
import OnboardingHeader from "./components/OnboardingHeader";
import OnboardingMiddleImage from "./components/OnboardingMiddleImage";
import OnboardingPagination from "./components/OnboardingPagination";

/**
 * Onboarding 2: Get plant care guides
 */
const BenefitsScreen: React.FC<
  NativeStackScreenProps<OnboardingStackParamList, "Benefits">
> = () => {
  return (
    <OnBoardLayout
      screenName={OnboardingScreens.BENEFITS as OnboardingScreenKeyType}
    >
      <OnboardingHeader
        screenName={OnboardingScreens.BENEFITS as OnboardingScreenKeyType}
      />
      <OnboardingMiddleImage
        screenName={OnboardingScreens.BENEFITS as OnboardingScreenKeyType}
        imageStyle={styles.image}
      />
      <View style={styles.bottom}>
        <OnboardingAction
          label={TEXTS.ONBOARDING.CONTINUE}
          screenName={OnboardingScreens.PAYWALL as OnboardingScreenKeyType}
          style={styles.buttonContainer}
        />
        <OnboardingPagination currentIndex={1} totalSteps={3} />
      </View>
    </OnBoardLayout>
  );
};

export default BenefitsScreen;
