import { View, Text } from "react-native";
import React from "react";
import styles from "../WelcomeScreen.styles";
import { TEXTS } from "@/constants/text";

const OnboardingDisclaimer = () => {
  return (
    <View style={styles.bottomInner}>
      <Text style={styles.disclaimer}>
        {TEXTS.WELCOME.DISCLAIMER}
        {"\n"}
        <Text style={styles.link}>{TEXTS.WELCOME.TERMS}</Text> &{" "}
        <Text style={styles.link}>{TEXTS.WELCOME.PRIVACY}</Text>.
      </Text>
    </View>
  );
};

export default OnboardingDisclaimer;
