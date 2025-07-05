import { spacing } from "@/constants/theme";
import React from "react";
import { Insets, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getTopStyle, styles } from "./CloseButton.styles";

const CloseButton = ({
  handleClose,
}: {
  handleClose: () => void;
}) => {
  const insets = useSafeAreaInsets();
  const topStyle = getTopStyle(insets);
  return (
    <TouchableOpacity
      style={[styles.closeButton, topStyle]}
      onPress={handleClose}
    >
      <Text style={styles.closeText}>×</Text>
    </TouchableOpacity>
  );
};

export default CloseButton;
