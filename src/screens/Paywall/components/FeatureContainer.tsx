import React, { memo } from "react";
import { ScrollView } from "react-native";
import { TEXTS } from "@/constants/text";
import styles from "../PaywallScreen.styles";
import FeatureCard from "./FeatureCard";

/**
 * Configuration constants for the feature container
 */
const FEATURE_CONFIG = {
  ICONS: {
    SCAN: require("../../../../assets/paywall/unlimited-icon.png"),
    SPEED: require("../../../../assets/paywall/speed-icon.png"),
    CARE: require("../../../../assets/paywall/care-icon.png"),
  },
  ACCESSIBILITY: {
    CONTAINER: "Premium features list",
  },
} as const;

/**
 * Array of feature data for rendering
 */
const FEATURES = [
  {
    icon: FEATURE_CONFIG.ICONS.SCAN,
    title: TEXTS.PAYWALL.FEATURES.UNLIMITED,
    desc: TEXTS.PAYWALL.FEATURES.UNLIMITED_DESC,
  },
  {
    icon: FEATURE_CONFIG.ICONS.SPEED,
    title: TEXTS.PAYWALL.FEATURES.FASTER,
    desc: TEXTS.PAYWALL.FEATURES.FASTER_DESC,
  },
  {
    icon: FEATURE_CONFIG.ICONS.CARE,
    title: TEXTS.PAYWALL.FEATURES.DETAILED,
    desc: TEXTS.PAYWALL.FEATURES.DETAILED_DESC,
  },
] as const;

/**
 * FeatureContainer component that displays a horizontal scrollable list
 * of premium features using FeatureCard components.
 *
 * @returns A React component
 */
const FeatureContainer: React.FC = () => {
  return (
    <ScrollView
      horizontal
      style={styles.featuresRow}
      showsHorizontalScrollIndicator={false}
      accessibilityRole="scrollbar"
      accessibilityLabel={FEATURE_CONFIG.ACCESSIBILITY.CONTAINER}
    >
      {FEATURES.map((feature, index) => (
        <FeatureCard
          key={`feature-${index}`}
          icon={feature.icon}
          title={feature.title}
          desc={feature.desc}
        />
      ))}
    </ScrollView>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(FeatureContainer);
