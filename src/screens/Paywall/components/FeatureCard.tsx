import React, { memo } from "react";
import { Image, Text, View, ImageSourcePropType } from "react-native";
import styles from "../PaywallScreen.styles";

/**
 * Props for the FeatureCard component
 */
interface FeatureCardProps {
  /** Icon image source for the feature */
  icon: ImageSourcePropType;
  /** Title text for the feature */
  title: string;
  /** Description text for the feature */
  desc: string;
}

/**
 * Configuration constants for the feature card
 */
const FEATURE_CARD_CONFIG = {
  ACCESSIBILITY: {
    CONTAINER: "Feature card container",
    ICON: "Feature icon",
  },
} as const;

/**
 * FeatureCard component that displays a single premium feature
 * with an icon, title, and description.
 *
 * @param props - Component props
 * @returns A React component
 */
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, desc }) => {
  return (
    <View
      style={styles.featureCard}
      accessibilityRole="button"
      accessibilityLabel={`${title}: ${desc}`}
      accessibilityHint={FEATURE_CARD_CONFIG.ACCESSIBILITY.CONTAINER}
    >
      <Image
        source={icon}
        style={styles.featureIconImage}
        resizeMode="contain"
        accessibilityRole="image"
        accessibilityLabel={FEATURE_CARD_CONFIG.ACCESSIBILITY.ICON}
      />
      <Text
        style={styles.featureTitle}
        accessibilityRole="header"
      >
        {title}
      </Text>
      <Text style={styles.featureDesc}>{desc}</Text>
    </View>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(FeatureCard);
