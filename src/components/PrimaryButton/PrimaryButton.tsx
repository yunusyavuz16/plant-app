import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./PrimaryButton.styles";

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
  testID?: string;
}

/**
 * Primary action button used across the app.
 */
const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  onPress,
  testID,
}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onPress}
    activeOpacity={0.8}
    testID={testID}
  >
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

export default PrimaryButton;
