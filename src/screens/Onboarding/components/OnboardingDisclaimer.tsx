import { View, Text } from "react-native";
import React from "react";
import styles from "../WelcomeScreen.styles";
import { TEXTS } from "@/constants/text";

const OnboardingDisclaimer = () => {
  return (
    <View testID="disclaimer-container" style={styles.bottomInner}>
      <Text testID="disclaimer-text" style={styles.disclaimer}>
        {TEXTS.WELCOME.DISCLAIMER}
        {"\n"}
        <Text testID="disclaimer-links">
          <Text style={styles.link}>{TEXTS.WELCOME.TERMS}</Text> &{" "}
          <Text style={styles.link}>{TEXTS.WELCOME.PRIVACY}</Text>
        </Text>
        .
      </Text>
    </View>
  );
};

export default OnboardingDisclaimer;
