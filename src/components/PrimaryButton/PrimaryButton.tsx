import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './PrimaryButton.styles';

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
}

/**
 * Primary action button used across the app.
 */
const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

export default PrimaryButton;