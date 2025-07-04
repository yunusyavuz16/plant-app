import PrimaryButton from "@components/PrimaryButton/PrimaryButton";
import { OnboardingStackParamList } from "@navigation/OnboardingStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, ImageBackground, ImageStyle, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./WelcomeScreen.styles";

/**
 * Screen shown first in the onboarding flow.
 * Displays a hero image, introduction copy and a call-to-action button.
 */
const WelcomeScreen: React.FC<
  NativeStackScreenProps<OnboardingStackParamList, "Welcome">
> = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  /**
   * Navigate to the next onboarding step when the user presses the CTA.
   */
  const handleGetStarted = () => {
    navigation.navigate("Features");
  };

  return (
    <ImageBackground
      source={require("../../../assets/get-started/get-started-bg.png")}
      style={[
        styles.backgroundImage,
        { paddingTop: insets.top + 12, paddingBottom: insets.bottom + 12 },
      ]}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Welcome to <Text style={styles.titleHighlight}>PlantApp</Text>
          </Text>
          <Text style={styles.subtitle}>
            Identify more than 3000+ plants and{"\n"}88% accuracy.
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/get-started/get-started-middle.png")}
            style={styles.image as ImageStyle}
          />
        </View>
        <View style={styles.bottom}>
          <View style={styles.buttonContainer}>
            <PrimaryButton label="Get Started" onPress={handleGetStarted} />
          </View>

          <View style={styles.bottomInner}>
            <Text style={styles.disclaimer}>
              By tapping next, you are agreeing to PlantID{"\n"}
              <Text style={styles.link}>Terms of Use</Text> &{" "}
              <Text style={styles.link}>Privacy Policy</Text>.
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
