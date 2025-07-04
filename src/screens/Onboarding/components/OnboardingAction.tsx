import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import { OnboardingScreenKeyType } from "@/constants/screen";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import styles from "../WelcomeScreen.styles";

const OnboardingAction = ({
  label,
  style,
  screenName,
}: {
  label: string;
  style?: StyleProp<ViewStyle>;
  screenName: OnboardingScreenKeyType;
}) => {
  const navigation = useNavigation();
  const handleGetStarted = () => {
    navigation.navigate(screenName as never);
  };
  return (
    <View style={[styles.buttonContainer, style]}>
      <PrimaryButton label={label} onPress={handleGetStarted} />
    </View>
  );
};

export default OnboardingAction;
