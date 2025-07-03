import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { OnboardingStackParamList } from "../../navigation/OnboardingStack";
import { useOnboarding } from "../../context/OnboardingContext";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import styles from "./PaywallScreen.styles";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const CONST_HEIGHT_CONTENT = 600;

// Feature card icons
const FEATURE_ICONS = {
  scan: require("../../../assets/paywall/scan-icon.png"),
  speed: require("../../../assets/paywall/speed-icon.png"),
  care: require("../../../assets/paywall/care-icon.png"),
};

/**
 * Final screen in the onboarding flow with paywall.
 * Completing this screen marks onboarding as done.
 */
const PaywallScreen: React.FC<
  NativeStackScreenProps<OnboardingStackParamList, "Paywall">
> = () => {
  const insets = useSafeAreaInsets();
  const { completeOnboarding } = useOnboarding();

  /**
   * Complete onboarding when user closes paywall.
   * This will trigger RootNavigator to show MainStack.
   */
  const handleClose = async () => {
    await completeOnboarding();
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
        style={[styles.topImage, { height: SCREEN_HEIGHT * 0.58 }]}
        resizeMode="cover"
      />
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
        <ScrollView
          horizontal
          style={styles.featuresRow}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.featureCard}>
            <View style={styles.featureIcon}>
              <Image
                source={FEATURE_ICONS.scan}
                style={styles.featureIconImage}
              />
            </View>
            <Text style={styles.featureTitle}>Unlimited</Text>
            <Text style={styles.featureDesc}>Plant Identify</Text>
          </View>
          <View style={[styles.featureCard, styles.marginLeft]}>
            <View style={styles.featureIcon}>
              <Image
                source={FEATURE_ICONS.speed}
                style={styles.featureIconImage}
              />
            </View>
            <Text style={styles.featureTitle}>Faster</Text>
            <Text style={styles.featureDesc}>Process</Text>
          </View>
          <View style={[styles.featureCard, styles.marginLeft]}>
            <View style={styles.featureIcon}>
              <Image
                source={FEATURE_ICONS.care}
                style={styles.featureIconImage}
              />
            </View>
            <Text style={styles.featureTitle}>Detailed</Text>
            <Text style={styles.featureDesc}>Plant care</Text>
          </View>
        </ScrollView>
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
            <View style={[styles.radio, styles.radioActive]}>
              {/* white circle */}
              <View style={styles.radioCircle} />
            </View>
            <View style={styles.planTextBox}>
              <Text style={styles.planTitle}>1 Year</Text>
              <Text style={styles.planDesc}>
                First 3 days free, then $529,99/year
              </Text>
            </View>
          </View>
        </View>
        <PrimaryButton label="Try free for 3 days" onPress={handleSubscribe} />
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
