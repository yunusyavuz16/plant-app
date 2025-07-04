import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors, spacing, typography } from '@/constants/theme';
import Animated, { FadeIn } from 'react-native-reanimated';

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
    <Animated.View
      entering={FadeIn.duration(300)}
      style={styles.container}
    >
      <View style={styles.content}>
        {/* Error Icon */}
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>⚠️</Text>
        </View>

        {/* Error Message */}
        <Text style={styles.message}>{message}</Text>

        {/* Error Details (if provided) */}
        {errorDetails && (
          <Text style={styles.details}>{errorDetails}</Text>
        )}

        {/* Retry Button */}
        <Pressable
          style={styles.retryButton}
          onPress={onRetry}
        >
          <Text style={styles.retryText}>Try Again</Text>
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
    maxWidth: 300,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.background.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  icon: {
    fontSize: 32,
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
    borderRadius: 12,
    marginTop: spacing.md,
  },
  retryText: {
    fontFamily: typography.fonts.RubikMedium,
    fontSize: typography.size.md,
    color: colors.background.white,
  },
});

export default DataErrorView;