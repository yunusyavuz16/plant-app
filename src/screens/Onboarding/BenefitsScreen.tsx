import PrimaryButton from "@components/PrimaryButton/PrimaryButton";
import { OnboardingStackParamList } from "@navigation/OnboardingStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./BenefitsScreen.styles";

/**
 * Onboarding 2: Get plant care guides
 */
const BenefitsScreen: React.FC<
  NativeStackScreenProps<OnboardingStackParamList, "Benefits">
> = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  /**
   * Navigate to the next onboarding step.
   */
  const handleContinue = () => {
    navigation.navigate("Paywall");
  };

  return (
    <ImageBackground
      source={require("../../../assets/onboarding-2/Background.png")}
      style={[
        styles.backgroundImage,
        { paddingTop: insets.top + 12, paddingBottom: insets.bottom + 12 },
      ]}
      resizeMode="cover"
    >
      <View style={styles.container}>
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
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/onboarding-2/onboarding-2-middle.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.bottom}>
          <View style={styles.buttonContainer}>
            <PrimaryButton label="Continue" onPress={handleContinue} />
          </View>
          <View style={styles.pagination}>
            <View style={styles.dot} />
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default BenefitsScreen;
