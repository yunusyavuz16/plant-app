import { OnboardingScreenKeyType, OnboardingScreens } from "@/constants/screen";
import { TEXTS } from "@/constants/text";
import { OnboardingStackParamList } from "@navigation/OnboardingStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import styles from "./WelcomeScreen.styles";
import OnBoardLayout from "./components/OnBoardLayout";
import OnboardingAction from "./components/OnboardingAction";
import OnboardingDisclaimer from "./components/OnboardingDisclaimer";
import OnboardingHeader from "./components/OnboardingHeader";
import OnboardingMiddleImage from "./components/OnboardingMiddleImage";

/**
 * Screen shown first in the onboarding flow.
 */
const WelcomeScreen: React.FC<
  NativeStackScreenProps<OnboardingStackParamList, "Welcome">
> = () => {
  return (
    <OnBoardLayout
      screenName={OnboardingScreens.WELCOME as OnboardingScreenKeyType}
    >
      {/* Header Start */}
      <OnboardingHeader
        screenName={OnboardingScreens.WELCOME as OnboardingScreenKeyType}
        title={TEXTS.WELCOME.TITLE}
        titleHighlight={TEXTS.WELCOME.APP_NAME}
        description={TEXTS.WELCOME.SUBTITLE}
      />
      {/* Header End */}

      {/* Image Start */}
      <OnboardingMiddleImage
        screenName={OnboardingScreens.WELCOME as OnboardingScreenKeyType}
        imageStyle={styles.image}
        imageContainerStyle={styles.imageContainer}
      />
      {/* Image End */}

      {/* Bottom Start */}
      <View style={styles.bottom}>
        <OnboardingAction
          label={TEXTS.WELCOME.GET_STARTED}
          screenName={OnboardingScreens.FEATURES as OnboardingScreenKeyType}
        />

        <OnboardingDisclaimer />
      </View>
      {/* Bottom End */}
    </OnBoardLayout>
  );
};

export default WelcomeScreen;
