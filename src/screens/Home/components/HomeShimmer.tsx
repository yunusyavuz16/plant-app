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
    <ShimmerPlaceholder
      LinearGradient={LinearGradient}
      style={styles.premiumBanner}
    />

    {/* “Get Started” header */}
    <ShimmerPlaceholder
      LinearGradient={LinearGradient}
      style={styles.sectionTitle}
    />

    {/* Horizontal question cards */}
    <View style={styles.row}>
      {[1, 2, 3].map((i) => (
        <ShimmerPlaceholder
          key={i}
          LinearGradient={LinearGradient}
          style={styles.questionCard}
        />
      ))}
    </View>

    {/* Category grid */}
    <View style={styles.grid}>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <ShimmerPlaceholder
          key={i}
          LinearGradient={LinearGradient}
          style={styles.categoryCard}
        />
      ))}
    </View>
  </SafeAreaView>
);
