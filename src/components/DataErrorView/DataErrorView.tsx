import React from "react";
import { Pressable, Text, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { styles } from "./DataErrorView.style";

interface DataErrorViewProps {
  message?: string;
  errorDetails?: string;
  onRetry: () => void;
}

const DataErrorView: React.FC<DataErrorViewProps> = ({
  message = "Unable to load content",
  errorDetails,
  onRetry,
}) => {
  return (
    <Animated.View entering={FadeIn.duration(300)} style={styles.container}>
      <View style={styles.content}>
        {/* Error Icon */}
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>⚠️</Text>
        </View>

        {/* Error Message */}
        <Text style={styles.message}>{message}</Text>

        {/* Error Details (if provided) */}
        {errorDetails && <Text style={styles.details}>{errorDetails}</Text>}

        {/* Retry Button */}
        <Pressable style={styles.retryButton} onPress={onRetry}>
          <Text style={styles.retryText}>Try Again</Text>
        </Pressable>
      </View>
    </Animated.View>
  );
};

export default DataErrorView;
