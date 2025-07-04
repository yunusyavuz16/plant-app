import { PLAN_TYPES } from "@/constants/plan";
import { TEXTS } from "@/constants/text";
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
          <Text style={styles.titleBold}>{TEXTS.WELCOME.APP_NAME}</Text>{" "}
          {TEXTS.PAYWALL.TITLE}
        </Text>
        <Text style={styles.subtitle}>{TEXTS.PAYWALL.SUBTITLE}</Text>
        <ScrollView
          horizontal
          style={styles.featuresRow}
          showsHorizontalScrollIndicator={false}
        >
          <FeatureCard
            icon={FEATURE_ICONS.scan}
            title={TEXTS.PAYWALL.FEATURES.UNLIMITED}
            desc={TEXTS.PAYWALL.FEATURES.UNLIMITED_DESC}
          />
          <FeatureCard
            icon={FEATURE_ICONS.speed}
            title={TEXTS.PAYWALL.FEATURES.FASTER}
            desc={TEXTS.PAYWALL.FEATURES.FASTER_DESC}
          />
          <FeatureCard
            icon={FEATURE_ICONS.care}
            title={TEXTS.PAYWALL.FEATURES.DETAILED}
            desc={TEXTS.PAYWALL.FEATURES.DETAILED_DESC}
          />
        </ScrollView>
        <View style={styles.planBoxesContainer}>
          <PlanBox
            plan={PLAN_TYPES.MONTHLY as keyof typeof PLAN_TYPES}
            title={TEXTS.PAYWALL.PLANS.MONTHLY.TITLE}
            desc={TEXTS.PAYWALL.PLANS.MONTHLY.PRICE}
            activeDesc={TEXTS.PAYWALL.PLANS.MONTHLY.RENEWAL}
          />
          <PlanBox
            plan={PLAN_TYPES.YEARLY as keyof typeof PLAN_TYPES}
            title={TEXTS.PAYWALL.PLANS.YEARLY.TITLE}
            desc={TEXTS.PAYWALL.PLANS.YEARLY.TRIAL}
            activeDesc={TEXTS.PAYWALL.PLANS.YEARLY.PRICE}
          />
        </View>
        <PrimaryButton label={TEXTS.PAYWALL.CTA} onPress={handleSubscribe} />
        <Text style={styles.legalText}>{TEXTS.PAYWALL.LEGAL}</Text>
        <View style={styles.linksRow}>
          <Text style={styles.link}>{TEXTS.PAYWALL.LINKS.TERMS}</Text>
          <Text style={styles.linkDot}>•</Text>
          <Text style={styles.link}>{TEXTS.PAYWALL.LINKS.PRIVACY}</Text>
          <Text style={styles.linkDot}>•</Text>
          <Text style={styles.link}>{TEXTS.PAYWALL.LINKS.RESTORE}</Text>
        </View>
      </View>
    </View>
  );
};

export default PaywallScreen;
