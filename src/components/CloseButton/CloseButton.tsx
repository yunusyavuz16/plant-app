import React, { memo } from "react";
import { Text, TouchableOpacity, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { spacing } from "@/constants/theme";
import { styles } from "./CloseButton.styles";

/**
 * Configuration constants for the close button
 */
const CLOSE_BUTTON_CONFIG = {
  POSITION: {
    OFFSET: spacing.xxl,
  },
  ACCESSIBILITY: {
    LABEL: "Close",
    HINT: "Closes the current screen or modal",
  },
} as const;

/**
 * Props for the CloseButton component
 */
interface CloseButtonProps {
  /** Function to call when the close button is pressed */
  handleClose: () => void;
  /** Optional style overrides */
  style?: ViewStyle;
  /** Optional custom close icon */
  closeIcon?: string;
  /** Optional accessibility label */
  accessibilityLabel?: string;
}

/**
 * A reusable close button component that:
 * 1. Positions itself in the top-right corner
 * 2. Respects safe area insets
 * 3. Provides visual feedback on press
 *
 * Features:
 * - Safe area aware positioning
 * - Customizable appearance
 * - Accessibility support
 * - Touch feedback
 */
const CloseButton: React.FC<CloseButtonProps> = ({
  handleClose,
  style,
  closeIcon = "×",
  accessibilityLabel = CLOSE_BUTTON_CONFIG.ACCESSIBILITY.LABEL,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <TouchableOpacity
      style={[
        styles.closeButton,
        { top: insets.top + CLOSE_BUTTON_CONFIG.POSITION.OFFSET },
        style,
      ]}
      onPress={handleClose}
      activeOpacity={0.7}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      accessibilityHint={CLOSE_BUTTON_CONFIG.ACCESSIBILITY.HINT}
    >
      <Text style={styles.closeText}>{closeIcon}</Text>
    </TouchableOpacity>
  );
};

// Display name for debugging purposes
CloseButton.displayName = 'CloseButton';

// Memoize the component to prevent unnecessary re-renders
export default memo(CloseButton);
