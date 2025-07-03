import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { OnboardingStackParamList } from "../../navigation/OnboardingStack";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import styles from "./PaywallScreen.styles";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const CONST_HEIGHT_CONTENT = 600;

/**
 * Final screen in the onboarding flow with paywall.
 * Completing this screen marks onboarding as done.
 */
const PaywallScreen: React.FC<
  NativeStackScreenProps<OnboardingStackParamList, "Paywall">
> = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  /**
   * Complete onboarding when user closes paywall.
   */
  const handleClose = () => {
    navigation.replace("Home");
  };

  /**
   * Handle subscription purchase (placeholder).
   */
  const handleSubscribe = () => {
    // TODO: Implement subscription logic
    handleClose();
  };

  return (
    <View
      style={[
        styles.root,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <ImageBackground
        source={require("../../../assets/paywall/paywall-top.png")}
        style={[styles.topImage, { height: SCREEN_HEIGHT * 0.45 }]}
        resizeMode="cover"
      ></ImageBackground>
      <TouchableOpacity
        style={[styles.closeButton, { top: insets.top + 24 }]}
        onPress={handleClose}
      >
        <Text style={styles.closeText}>×</Text>
      </TouchableOpacity>
      <View
        style={[
          styles.content,
          {
            marginTop:
              SCREEN_HEIGHT - CONST_HEIGHT_CONTENT - insets.bottom - insets.top,
          },
        ]}
      >
        <Text style={styles.title}>
          <Text style={styles.titleBold}>PlantApp</Text> Premium
        </Text>
        <Text style={styles.subtitle}>Access All Features</Text>
        <View style={styles.featuresRow}>
          <View style={styles.featureCard}>
            <View style={styles.featureIcon} />
            <Text style={styles.featureTitle}>Unlimited</Text>
            <Text style={styles.featureDesc}>Plant Identify</Text>
          </View>
          <View style={styles.featureCard}>
            <View style={styles.featureIcon} />
            <Text style={styles.featureTitle}>Faster</Text>
            <Text style={styles.featureDesc}>Process</Text>
          </View>
          <View style={styles.featureCard}>
            <View style={styles.featureIcon} />
            <Text style={styles.featureTitle}>Detailed</Text>
            <Text style={styles.featureDesc}>Plant Care</Text>
          </View>
        </View>
        <View style={styles.planBox}>
          <View style={styles.planRow}>
            <View style={styles.radio} />
            <View style={styles.planTextBox}>
              <Text style={styles.planTitle}>1 Month</Text>
              <Text style={styles.planDesc}>
                $2.99/month,{" "}
                <Text style={styles.planDescDim}>auto renewable</Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.planBox, styles.planBoxActive]}>
          <View style={styles.saveBadge}>
            <Text style={styles.saveBadgeText}>Save 50%</Text>
          </View>
          <View style={styles.planRow}>
            <View style={[styles.radio, styles.radioActive]} />
            <View style={styles.planTextBox}>
              <Text style={styles.planTitle}>1 Year</Text>
              <Text style={styles.planDesc}>
                First 3 days free, then $529,99/year
              </Text>
            </View>
          </View>
        </View>
        <PrimaryButton label="Try free for 3 days" onPress={handleClose} />
        <Text style={styles.legalText}>
          After the 3-day free trial period you'll be charged ₺274.99 per year
          unless you cancel before the trial expires. Yearly Subscription is
          Auto-Renewable
        </Text>
        <View style={styles.linksRow}>
          <Text style={styles.link}>Terms</Text>
          <Text style={styles.linkDot}>•</Text>
          <Text style={styles.link}>Privacy</Text>
          <Text style={styles.linkDot}>•</Text>
          <Text style={styles.link}>Restore</Text>
        </View>
      </View>
    </View>
  );
};

export default PaywallScreen;
