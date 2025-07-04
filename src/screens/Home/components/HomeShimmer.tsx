// src/components/ShimmerHomeScreen.tsx
import { spacing } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";
import styles from "./HomeShimmer.styles";

/**
 * Constants for shimmer placeholder configuration
 */
const SHIMMER_CONFIG = {
  QUESTION_COUNT: 3,
  CATEGORY_COUNT: 6,
  QUESTION_CARD_WIDTH: 120,
} as const;

/**
 * Loading placeholder component for the home screen.
 * Displays animated shimmer effects in place of:
 * 1. Premium banner
 * 2. Section headers
 * 3. Question cards
 * 4. Category grid
 */
export const HomeShimmer: React.FC = () => {
  /**
   * Renders a shimmer placeholder with LinearGradient
   * @param style - Additional styles to apply to the placeholder
   * @param key - Optional key for list items
   */
  const renderShimmer = (style: any, key?: number) => (
    <ShimmerPlaceholder
      key={key}
      LinearGradient={LinearGradient}
      style={style}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Premium banner placeholder */}
      {renderShimmer(styles.premiumBanner)}

      {/* "Get Started" header placeholder */}
      {renderShimmer([styles.sectionTitle, { width: SHIMMER_CONFIG.QUESTION_CARD_WIDTH }])}

      {/* Horizontal question cards placeholders */}
      <View style={styles.row}>
        {Array.from({ length: SHIMMER_CONFIG.QUESTION_COUNT }).map((_, index) => (
          renderShimmer([styles.questionCard, { marginRight: spacing.sm }], index)
        ))}
      </View>

      {/* Category grid placeholders */}
      <View style={styles.grid}>
        {Array.from({ length: SHIMMER_CONFIG.CATEGORY_COUNT }).map((_, index) => (
          renderShimmer(styles.categoryCard, index)
        ))}
      </View>
    </SafeAreaView>
  );
};
