import { colors, spacing, typography } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.xl,
    backgroundColor: colors.background.white,
  },
  content: {
    alignItems: "center",
    maxWidth: 300,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.background.lightGray,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  icon: {
    fontSize: 32,
  },
  message: {
    fontFamily: typography.fonts.RubikMedium,
    fontSize: typography.size.lg,
    color: colors.text.primary,
    textAlign: "center",
    marginBottom: spacing.md,
  },
  details: {
    fontFamily: typography.fonts.Rubik,
    fontSize: typography.size.sm,
    color: colors.text.secondary,
    textAlign: "center",
    marginBottom: spacing.lg,
  },
  retryButton: {
    backgroundColor: colors.text.primary,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: 12,
    marginTop: spacing.md,
  },
  retryText: {
    fontFamily: typography.fonts.RubikMedium,
    fontSize: typography.size.md,
    color: colors.background.white,
  },
});
