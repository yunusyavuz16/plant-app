// src/components/ShimmerHomeScreen.tsx
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";
import styles from "./HomeShimmer.styles";

export const HomeShimmer: React.FC = () => (
  <SafeAreaView style={styles.container}>
    {/* Premium banner */}
    <View testID="shimmer-placeholder" accessibilityLabel="premium-banner-shimmer">
      <ShimmerPlaceholder
        LinearGradient={LinearGradient}
        style={styles.premiumBanner}
      />
    </View>

    {/* "Get Started" header */}
    <View testID="shimmer-placeholder" accessibilityLabel="section-title-shimmer">
      <ShimmerPlaceholder
        LinearGradient={LinearGradient}
        style={styles.sectionTitle}
      />
    </View>

    {/* Horizontal question cards */}
    <View style={styles.row}>
      {[1, 2, 3].map((i) => (
        <View
          key={i}
          testID="shimmer-placeholder"
          accessibilityLabel="question-card-shimmer"
        >
          <ShimmerPlaceholder
            LinearGradient={LinearGradient}
            style={styles.questionCard}
          />
        </View>
      ))}
    </View>

    {/* Category grid */}
    <View style={styles.grid}>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <View
          key={i}
          testID="shimmer-placeholder"
          accessibilityLabel="category-card-shimmer"
        >
          <ShimmerPlaceholder
            LinearGradient={LinearGradient}
            style={styles.categoryCard}
          />
        </View>
      ))}
    </View>
  </SafeAreaView>
);
