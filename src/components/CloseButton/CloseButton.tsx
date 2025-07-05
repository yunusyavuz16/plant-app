import { spacing } from "@/constants/theme";
import React from "react";
import { Insets, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./CloseButton.styles";

const CloseButton = ({
  handleClose,
}: {
  handleClose: () => void;
}) => {
  const insets = useSafeAreaInsets();
  return (
    <TouchableOpacity
      style={[styles.closeButton, { top: insets.top + spacing.xxl }]}
      onPress={handleClose}
    >
      <Text style={styles.closeText}>×</Text>
    </TouchableOpacity>
  );
};

export default CloseButton;
