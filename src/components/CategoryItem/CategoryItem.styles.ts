import { colors, layout, spacing, typography } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  categoryCard: {
    flex: 1,
    paddingStart: spacing.lg,
    paddingTop: spacing.lg,
    borderRadius: layout.radius.lg,
    backgroundColor: colors.background.lightGreen,
    borderWidth: 1,
    borderColor: colors.border.green,
    justifyContent: "space-between",
    minHeight: layout.card.categoryHeight,
  },
  categoryTitle: {
    fontSize: typography.size.lg,
    fontWeight: "600",
    textAlign: "left",
    marginBottom: spacing.sm,
  },
  categoryImage: {
    width: "100%",
    height: 100,
    borderRadius: layout.radius.md,
  },
});
