import { OnboardingScreenKeyType, OnboardingScreens } from "@/constants/screen";
import { TEXTS } from "@/constants/text";
import { OnboardingStackParamList } from "@navigation/OnboardingStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./BenefitsScreen.styles";
import OnBoardLayout from "./components/OnBoardLayout";
import OnboardingAction from "./components/OnboardingAction";
import OnboardingMiddleImage from "./components/OnboardingMiddleImage";

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
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>
            Get plant <Text style={styles.titleHighlight}>care guides</Text>
          </Text>
          <Image
            source={require("../../../assets/onboarding-2/Brush.png")}
            style={styles.brushImage}
            resizeMode="contain"
          />
        </View>
      </View>
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
        <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
        </View>
      </View>
    </OnBoardLayout>
  );
};

export default BenefitsScreen;
