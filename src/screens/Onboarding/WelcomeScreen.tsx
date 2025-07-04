import PrimaryButton from "@components/PrimaryButton/PrimaryButton";
import { TEXTS } from "@/constants/text";
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
            {TEXTS.WELCOME.TITLE}{" "}
            <Text style={styles.titleHighlight}>{TEXTS.WELCOME.APP_NAME}</Text>
          </Text>
          <Text style={styles.subtitle}>{TEXTS.WELCOME.SUBTITLE}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/get-started/get-started-middle.png")}
            style={styles.image as ImageStyle}
          />
        </View>
        <View style={styles.bottom}>
          <View style={styles.buttonContainer}>
            <PrimaryButton label={TEXTS.WELCOME.GET_STARTED} onPress={handleGetStarted} />
          </View>

          <View style={styles.bottomInner}>
            <Text style={styles.disclaimer}>
              {TEXTS.WELCOME.DISCLAIMER}{"\n"}
              <Text style={styles.link}>{TEXTS.WELCOME.TERMS}</Text> &{" "}
              <Text style={styles.link}>{TEXTS.WELCOME.PRIVACY}</Text>.
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
