import { TEXTS } from "@/constants/text";
import PrimaryButton from "@components/PrimaryButton/PrimaryButton";
import { OnboardingStackParamList } from "@navigation/OnboardingStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, ImageStyle, Text, View } from "react-native";
import styles from "./WelcomeScreen.styles";
import OnBoardLayout from "./components/OnBoardLayout";
import { OnboardingScreenKeyType, OnboardingScreens } from "@/constants/screen";

/**
 * Screen shown first in the onboarding flow.
 */
const WelcomeScreen: React.FC<
  NativeStackScreenProps<OnboardingStackParamList, "Welcome">
> = ({ navigation }) => {
  /**
   * Navigate to the next onboarding step when the user presses the CTA.
   */
  const handleGetStarted = () => {
    navigation.navigate("Features");
  };

  return (
    <OnBoardLayout screenName={OnboardingScreens.WELCOME as OnboardingScreenKeyType}>
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
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/get-started/get-started-middle.png")}
          style={styles.image as ImageStyle}
        />
      </View>
      {/* Image End */}

      {/* Bottom Start */}
      <View style={styles.bottom}>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            label={TEXTS.WELCOME.GET_STARTED}
            onPress={handleGetStarted}
          />
        </View>

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
