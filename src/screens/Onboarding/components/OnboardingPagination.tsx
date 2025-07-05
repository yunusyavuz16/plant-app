import React from "react";
import { View } from "react-native";
import styles from "../FeaturesScreen.styles";

const OnboardingPagination = ({
  currentIndex,
  totalSteps,
}: {
  currentIndex: number;
  totalSteps: number;
}) => {
  return (
    <View testID="pagination-container" style={styles.pagination}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View
          testID="pagination-dot"
          key={index}
          style={[styles.dot, currentIndex === index && styles.dotActive]}
        />
      ))}
    </View>
  );
};

export default OnboardingPagination;
