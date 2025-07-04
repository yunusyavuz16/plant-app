import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import styles from './PrimaryButton.styles';

/**
 * Props for the PrimaryButton component
 */
interface PrimaryButtonProps extends Omit<TouchableOpacityProps, 'style' | 'activeOpacity'> {
  /** Text to display on the button */
  label: string;
  /** Function to call when button is pressed */
  onPress: () => void;
  /** Optional loading state */
  loading?: boolean;
  /** Optional disabled state */
  disabled?: boolean;
}

/**
 * Primary action button used across the app.
 * Features:
 * - Consistent styling with app theme
 * - Loading and disabled states
 * - Accessibility support
 * - Touch feedback
 */
const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  onPress,
  loading = false,
  disabled = false,
  accessibilityLabel,
  accessibilityHint,
  ...props
}) => (
  <TouchableOpacity
    style={[
      styles.container,
      disabled && styles.disabled
    ]}
    onPress={onPress}
    activeOpacity={0.8}
    disabled={disabled || loading}
    accessibilityLabel={accessibilityLabel || label}
    accessibilityRole="button"
    accessibilityHint={accessibilityHint}
    accessibilityState={{
      disabled: disabled || loading,
      busy: loading,
    }}
    {...props}
  >
    <Text style={[styles.label, disabled && styles.disabledText]}>
      {loading ? 'Loading...' : label}
    </Text>
  </TouchableOpacity>
);

// Display name for debugging purposes
PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;