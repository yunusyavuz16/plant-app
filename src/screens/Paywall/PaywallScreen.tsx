import { PLAN_TYPES } from "@/constants/plan";
import { useAppDispatch } from "@/store";
import { completeOnboarding } from "@/store/slices/onboardingSlice";
import PrimaryButton from "@components/PrimaryButton/PrimaryButton";
import { OnboardingStackParamList } from "@navigation/OnboardingStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./PaywallScreen.styles";
import FeatureCard from "./components/FeatureCard";
import PlanBox from "./components/PlanBox";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const CONST_HEIGHT_CONTENT = 600;

const FEATURE_ICONS = {
  scan: require("../../../assets/paywall/unlimited-icon.png"),
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
          <FeatureCard
            icon={FEATURE_ICONS.scan}
            title="Unlimited"
            desc="Plant Identify"
          />
          <FeatureCard
            icon={FEATURE_ICONS.speed}
            title="Faster"
            desc="Process"
          />
          <FeatureCard
            icon={FEATURE_ICONS.care}
            title="Detailed"
            desc="Plant care"
          />
        </ScrollView>
        <View style={styles.planBoxesContainer}>
          <PlanBox
            plan={PLAN_TYPES.MONTHLY as keyof typeof PLAN_TYPES}
            title="1 Month"
            desc="$2.99/month,"
            activeDesc="auto renewable"
          />
          <PlanBox
            plan={PLAN_TYPES.YEARLY as keyof typeof PLAN_TYPES}
            title="1 Year"
            desc="First 3 days free,"
            activeDesc="then $529,99/year"
          />
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
