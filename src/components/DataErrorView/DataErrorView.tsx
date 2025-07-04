import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors, spacing, typography } from '@/constants/theme';
import Animated, { FadeIn } from 'react-native-reanimated';

/**
 * Configuration constants for the error view
 */
const ERROR_VIEW_CONFIG = {
  ANIMATION: {
    DURATION: 300,
  },
  LAYOUT: {
    MAX_WIDTH: 300,
    ICON_SIZE: 64,
    BORDER_RADIUS: 12,
  },
} as const;

/**
 * Props for the DataErrorView component
 */
interface DataErrorViewProps {
  /** Main error message to display */
  message?: string;
  /** Optional detailed error message */
  errorDetails?: string;
  /** Callback function when retry button is pressed */
  onRetry: () => void;
  /** Optional custom retry button text */
  retryText?: string;
  /** Optional custom error icon */
  errorIcon?: string;
}

/**
 * A reusable error view component that displays:
 * 1. An error icon
 * 2. A main error message
 * 3. Optional detailed error message
 * 4. A retry button
 *
 * Features:
 * - Fade-in animation
 * - Responsive layout
 * - Customizable messages and icon
 * - Accessible retry button
 */
const DataErrorView: React.FC<DataErrorViewProps> = ({
  message = "Unable to load content",
  errorDetails,
  onRetry,
  retryText = "Try Again",
  errorIcon = "⚠️",
}) => {
  return (
    <Animated.View
      entering={FadeIn.duration(ERROR_VIEW_CONFIG.ANIMATION.DURATION)}
      style={styles.container}
    >
      <View style={styles.content}>
        {/* Error Icon */}
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>{errorIcon}</Text>
        </View>

        {/* Error Message */}
        <Text
          style={styles.message}
          accessibilityRole="alert"
        >
          {message}
        </Text>

        {/* Error Details (if provided) */}
        {errorDetails && (
          <Text
            style={styles.details}
            accessibilityRole="text"
          >
            {errorDetails}
          </Text>
        )}

        {/* Retry Button */}
        <Pressable
          style={({ pressed }) => [
            styles.retryButton,
            pressed && { opacity: 0.8 }
          ]}
          onPress={onRetry}
          accessibilityLabel={retryText}
          accessibilityRole="button"
          accessibilityHint="Attempts to reload the content"
        >
          <Text style={styles.retryText}>{retryText}</Text>
        </Pressable>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
    backgroundColor: colors.background.white,
  },
  content: {
    alignItems: 'center',
    maxWidth: ERROR_VIEW_CONFIG.LAYOUT.MAX_WIDTH,
  },
  iconContainer: {
    width: ERROR_VIEW_CONFIG.LAYOUT.ICON_SIZE,
    height: ERROR_VIEW_CONFIG.LAYOUT.ICON_SIZE,
    borderRadius: ERROR_VIEW_CONFIG.LAYOUT.ICON_SIZE / 2,
    backgroundColor: colors.background.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  icon: {
    fontSize: ERROR_VIEW_CONFIG.LAYOUT.ICON_SIZE / 2,
  },
  message: {
    fontFamily: typography.fonts.RubikMedium,
    fontSize: typography.size.lg,
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  details: {
    fontFamily: typography.fonts.Rubik,
    fontSize: typography.size.sm,
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  retryButton: {
    backgroundColor: colors.text.primary,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: ERROR_VIEW_CONFIG.LAYOUT.BORDER_RADIUS,
    marginTop: spacing.md,
  },
  retryText: {
    fontFamily: typography.fonts.RubikMedium,
    fontSize: typography.size.md,
    color: colors.background.white,
  },
});

export default DataErrorView;