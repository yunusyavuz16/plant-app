import { OnboardingScreenKeyType, OnboardingScreens } from "@/constants/screen";
import { TEXTS } from "@/constants/text";
import { OnboardingStackParamList } from "@navigation/OnboardingStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./FeaturesScreen.styles";
import OnBoardLayout from "./components/OnBoardLayout";
import OnboardingAction from "./components/OnboardingAction";
import OnboardingMiddleImage from "./components/OnboardingMiddleImage";

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
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>
              Take a photo to{" "}
              <Text style={styles.titleHighlight}>identify</Text>
            </Text>
            <Image
              source={require("../../../assets/onboarding-1/Brush.png")}
              style={styles.brushImage}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.title}>the plant!</Text>
        </View>
      </View>

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

        <View style={styles.pagination}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>
    </OnBoardLayout>
  );
};

export default FeaturesScreen;
