import { colors, layout, spacing, typography } from "@/constants/theme";
import { StyleSheet } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";

export const styles = StyleSheet.create({
  closeButton: {
    width: layout.icon.sm,
    height: layout.icon.sm,
    borderRadius: layout.icon.sm / 2,
    backgroundColor: colors.overlay.dark,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: spacing.xl + 1,
    right: spacing.xl + 1,
    zIndex: 10,
  },
  closeText: {
    color: colors.text.white,
    fontSize: typography.size.xl,
    textAlign: "center",
    fontWeight: "400",
  },
});


export const getTopStyle = (insets: EdgeInsets) => {
  return {
    top: insets.top + spacing.xxl,
  };
};