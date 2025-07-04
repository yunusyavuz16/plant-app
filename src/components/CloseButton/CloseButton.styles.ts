import { colors, layout, spacing, typography } from "@/constants/theme";
import { StyleSheet } from "react-native";

/**
 * Configuration constants for close button styles
 */
const CLOSE_BUTTON_STYLE_CONFIG = {
  DIMENSIONS: {
    SIZE: layout.icon.sm,
    BORDER_RADIUS: layout.icon.sm / 2,
  },
  POSITION: {
    TOP: spacing.xl + 1,
    RIGHT: spacing.xl + 1,
    Z_INDEX: 10,
  },
  TYPOGRAPHY: {
    SIZE: typography.size.xl,
    WEIGHT: "400",
  },
} as const;

export const styles = StyleSheet.create({
  closeButton: {
    width: CLOSE_BUTTON_STYLE_CONFIG.DIMENSIONS.SIZE,
    height: CLOSE_BUTTON_STYLE_CONFIG.DIMENSIONS.SIZE,
    borderRadius: CLOSE_BUTTON_STYLE_CONFIG.DIMENSIONS.BORDER_RADIUS,
    backgroundColor: colors.overlay.dark,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: CLOSE_BUTTON_STYLE_CONFIG.POSITION.TOP,
    right: CLOSE_BUTTON_STYLE_CONFIG.POSITION.RIGHT,
    zIndex: CLOSE_BUTTON_STYLE_CONFIG.POSITION.Z_INDEX,
  },
  closeText: {
    color: colors.text.white,
    fontSize: CLOSE_BUTTON_STYLE_CONFIG.TYPOGRAPHY.SIZE,
    textAlign: "center",
    fontWeight: CLOSE_BUTTON_STYLE_CONFIG.TYPOGRAPHY.WEIGHT,
  },
});
