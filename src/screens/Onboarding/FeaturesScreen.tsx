import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { OnboardingStackParamList } from "../../navigation/OnboardingStack";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import styles from "./FeaturesScreen.styles";

/**
 * Second screen in the onboarding flow showing camera feature.
 * Displays how to take photos to identify plants.
 */
const FeaturesScreen: React.FC<
  NativeStackScreenProps<OnboardingStackParamList, "Features">
> = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  /**
   * Navigate to the next onboarding step.
   */
  const handleContinue = () => {
    navigation.navigate("Benefits");
  };

  return (
    <ImageBackground
      source={require("../../../assets/onboarding-1/Background.png")}
      style={[
        styles.backgroundImage,
        { paddingTop: insets.top + 12, paddingBottom: insets.bottom + 12 },
      ]}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <View style={styles.titleRow}>
              <Text style={styles.title}>
                Take a photo to <Text style={styles.titleHighlight}>identify</Text>
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

        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/onboarding-1/Content.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.bottom}>
          <View style={styles.buttonContainer}>
            <PrimaryButton label="Continue" onPress={handleContinue} />
          </View>

          <View style={styles.pagination}>
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default FeaturesScreen;
