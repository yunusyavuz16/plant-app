import React, { useCallback } from "react";
import { Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { OnboardingStackParamList } from "@navigation/OnboardingStack";
import { useAppDispatch } from "@/store";
import { completeOnboarding } from "@/store/slices/onboardingSlice";
import { TEXTS } from "@/constants/text";
import CloseButton from "@/components/CloseButton/CloseButton";
import PrimaryButton from "@components/PrimaryButton/PrimaryButton";
import styles from "./PaywallScreen.styles";
import FeatureContainer from "./components/FeatureContainer";
import PaywallInnerLayout from "./components/PaywallInnerLayout";
import PaywallLayout from "./components/PaywallLayout";
import PlanBoxContainer from "./components/PlanBoxContainer";

/**
 * Props for the PaywallScreen component
 */
type PaywallScreenProps = NativeStackScreenProps<OnboardingStackParamList, "Paywall">;

/**
 * Configuration constants for the paywall screen
 */
const PAYWALL_CONFIG = {
  ACCESSIBILITY: {
    CLOSE_BUTTON: "Close paywall screen",
    SUBSCRIBE_BUTTON: "Subscribe to premium plan",
    TERMS_LINK: "View terms of service",
    PRIVACY_LINK: "View privacy policy",
    RESTORE_LINK: "Restore purchases",
  },
} as const;

/**
 * PaywallScreen component that displays subscription options and features.
 * This is the final screen in the onboarding flow.
 *
 * Features:
 * - Subscription plan selection
 * - Feature showcase
 * - Premium benefits explanation
 * - Terms and privacy links
 * - Purchase restoration
 */
const PaywallScreen: React.FC<PaywallScreenProps> = () => {
  const dispatch = useAppDispatch();

  /**
   * Complete onboarding when user closes paywall.
   * This will trigger RootNavigator to show MainStack.
   */
  const handleClose = useCallback(async () => {
    dispatch(completeOnboarding());
  }, []);

  /**
   * Handle subscription purchase.
   * Currently a placeholder that just completes onboarding.
   * TODO: Implement actual subscription logic
   */
  const handleSubscribe = useCallback(() => {
    // TODO: Implement subscription logic
    handleClose();
  }, []);

  return (
    <PaywallLayout>
      <CloseButton
        handleClose={handleClose}
        accessibilityLabel={PAYWALL_CONFIG.ACCESSIBILITY.CLOSE_BUTTON}
      />
      <PaywallInnerLayout>
        <Text style={styles.title}>
          <Text style={styles.titleBold}>{TEXTS.WELCOME.APP_NAME}</Text>{" "}
          {TEXTS.PAYWALL.TITLE}
        </Text>
        <Text style={styles.subtitle}>{TEXTS.PAYWALL.SUBTITLE}</Text>
        <FeatureContainer />
        <PlanBoxContainer />
        <PrimaryButton
          label={TEXTS.PAYWALL.CTA}
          onPress={handleSubscribe}
          accessibilityLabel={PAYWALL_CONFIG.ACCESSIBILITY.SUBSCRIBE_BUTTON}
        />
        <Text style={styles.legalText}>{TEXTS.PAYWALL.LEGAL}</Text>
        <View style={styles.linksRow}>
          <Text
            style={styles.link}
            accessibilityRole="link"
            accessibilityLabel={PAYWALL_CONFIG.ACCESSIBILITY.TERMS_LINK}
          >
            {TEXTS.PAYWALL.LINKS.TERMS}
          </Text>
          <Text style={styles.linkDot}>•</Text>
          <Text
            style={styles.link}
            accessibilityRole="link"
            accessibilityLabel={PAYWALL_CONFIG.ACCESSIBILITY.PRIVACY_LINK}
          >
            {TEXTS.PAYWALL.LINKS.PRIVACY}
          </Text>
          <Text style={styles.linkDot}>•</Text>
          <Text
            style={styles.link}
            accessibilityRole="link"
            accessibilityLabel={PAYWALL_CONFIG.ACCESSIBILITY.RESTORE_LINK}
          >
            {TEXTS.PAYWALL.LINKS.RESTORE}
          </Text>
        </View>
      </PaywallInnerLayout>
    </PaywallLayout>
  );
};

export default PaywallScreen;
