import CloseButton from "@/components/CloseButton/CloseButton";
import { TEXTS } from "@/constants/text";
import { useAppDispatch } from "@/store";
import { completeOnboarding } from "@/store/slices/onboardingSlice";
import PrimaryButton from "@components/PrimaryButton/PrimaryButton";
import { OnboardingStackParamList } from "@navigation/OnboardingStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import styles from "./PaywallScreen.styles";
import FeatureContainer from "./components/FeatureContainer";
import PaywallInnerLayout from "./components/PaywallInnerLayout";
import PaywallLayout from "./components/PaywallLayout";
import PlanBoxContainer from "./components/PlanBoxContainer";

/**
 * Final screen in the onboarding flow with paywall.
 * Completing this screen marks onboarding as done.
 */
const PaywallScreen: React.FC<
  NativeStackScreenProps<OnboardingStackParamList, "Paywall">
> = () => {
  const dispatch = useAppDispatch();

  /**
   * Complete onboarding when user closes paywall.
   * This will trigger RootNavigator to show MainStack.
   */
  const handleClose = async () => {
    dispatch(completeOnboarding());
  };

  /**
   * Handle subscription purchase (placeholder).
   */
  const handleSubscribe = () => {
    // TODO: Implement subscription logic
    handleClose();
  };

  return (
    <PaywallLayout>
      <CloseButton handleClose={handleClose} />
      <PaywallInnerLayout>
        <Text style={styles.title}>
          <Text style={styles.titleBold}>{TEXTS.WELCOME.APP_NAME}</Text>{" "}
          {TEXTS.PAYWALL.TITLE}
        </Text>
        <Text style={styles.subtitle}>{TEXTS.PAYWALL.SUBTITLE}</Text>
        <FeatureContainer />
        <PlanBoxContainer />
        <PrimaryButton label={TEXTS.PAYWALL.CTA} onPress={handleSubscribe} />
        <Text style={styles.legalText}>{TEXTS.PAYWALL.LEGAL}</Text>
        <View style={styles.linksRow}>
          <Text style={styles.link}>{TEXTS.PAYWALL.LINKS.TERMS}</Text>
          <Text style={styles.linkDot}>•</Text>
          <Text style={styles.link}>{TEXTS.PAYWALL.LINKS.PRIVACY}</Text>
          <Text style={styles.linkDot}>•</Text>
          <Text style={styles.link}>{TEXTS.PAYWALL.LINKS.RESTORE}</Text>
        </View>
      </PaywallInnerLayout>
    </PaywallLayout>
  );
};

export default PaywallScreen;
