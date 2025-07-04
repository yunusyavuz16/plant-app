import { OnboardingScreenKeyType, OnboardingScreens } from "@/constants/screen";
import { TEXTS } from "@/constants/text";
import { OnboardingStackParamList } from "@navigation/OnboardingStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import styles from "./WelcomeScreen.styles";
import OnBoardLayout from "./components/OnBoardLayout";
import OnboardingAction from "./components/OnboardingAction";
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
      <View style={styles.header}>
        <Text style={styles.title}>
          {TEXTS.WELCOME.TITLE}{" "}
          <Text style={styles.titleHighlight}>{TEXTS.WELCOME.APP_NAME}</Text>
        </Text>
        <Text style={styles.subtitle}>{TEXTS.WELCOME.SUBTITLE}</Text>
      </View>
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

        <View style={styles.bottomInner}>
          <Text style={styles.disclaimer}>
            {TEXTS.WELCOME.DISCLAIMER}
            {"\n"}
            <Text style={styles.link}>{TEXTS.WELCOME.TERMS}</Text> &{" "}
            <Text style={styles.link}>{TEXTS.WELCOME.PRIVACY}</Text>.
          </Text>
        </View>
      </View>
      {/* Bottom End */}
    </OnBoardLayout>
  );
};

export default WelcomeScreen;
