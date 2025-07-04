// components/ErrorBoundary.tsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, spacing, typography } from "@/constants/theme";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";

/**
 * Props for the ErrorBoundary component
 */
interface ErrorBoundaryProps {
  /** React children to be rendered inside the boundary */
  children: React.ReactNode;
  /** Optional callback when an error occurs */
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  /** Optional custom error title */
  errorTitle?: string;
  /** Optional custom retry button text */
  retryText?: string;
}

/**
 * State for the ErrorBoundary component
 */
interface ErrorBoundaryState {
  /** Whether an error has occurred */
  hasError: boolean;
  /** The error that occurred, if any */
  error?: Error;
}

/**
 * A React error boundary component that:
 * 1. Catches JavaScript errors anywhere in the child component tree
 * 2. Logs those errors
 * 3. Displays a fallback UI instead of the component tree that crashed
 *
 * Features:
 * - TypeScript support
 * - Custom error reporting
 * - Fallback UI with retry option
 * - Consistent styling with app theme
 */
export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: undefined,
  };

  /**
   * Static method to derive error state from an error that was caught
   */
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  /**
   * Lifecycle method called after an error has been caught
   */
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console in development
    if (__DEV__) {
      console.error("Uncaught error:", error);
      console.error("Component stack:", errorInfo.componentStack);
    }

    // Call optional error handler
    this.props.onError?.(error, errorInfo);
  }

  /**
   * Resets the error boundary state to try rendering children again
   */
  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    const { errorTitle = "Something went wrong", retryText = "Try Again" } = this.props;

    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text
            style={styles.title}
            accessibilityRole="header"
          >
            {errorTitle}
          </Text>
          <Text
            style={styles.message}
            accessibilityRole="text"
          >
            {this.state.error?.message || "An unexpected error occurred."}
          </Text>
          <PrimaryButton
            label={retryText}
            onPress={this.handleReset}
            accessibilityLabel={retryText}
            accessibilityHint="Attempts to recover from the error"
          />
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.xl,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background.white,
  },
  title: {
    fontSize: typography.size.xl,
    fontFamily: typography.fonts.RubikMedium,
    color: colors.text.primary,
    marginBottom: spacing.md,
    textAlign: "center",
  },
  message: {
    fontSize: typography.size.md,
    fontFamily: typography.fonts.Rubik,
    color: colors.text.secondary,
    marginBottom: spacing.xl,
    textAlign: "center",
  },
});
