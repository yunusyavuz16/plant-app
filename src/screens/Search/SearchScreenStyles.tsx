import { colors, spacing, typography } from "@/constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.white,
  },
  searchHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.background.lightGray,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background.lightGray,
    borderRadius: 12,
    paddingHorizontal: spacing.md,
    marginRight: spacing.md,
    height: 40,
  },
  searchInput: {
    flex: 1,
    marginLeft: spacing.sm,
    fontSize: typography.size.md,
    fontFamily: typography.fonts.Rubik,
    color: colors.text.primary,
  },
  cancelButton: {
    color: colors.text.primary,
    fontSize: typography.size.md,
    fontFamily: typography.fonts.Rubik,
  },
  listContent: {
    padding: spacing.lg,
    gap: spacing.lg,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing.xxl,
  },
  emptyText: {
    fontFamily: typography.fonts.Rubik,
    fontSize: typography.size.lg,
    color: colors.text.secondary,
    textAlign: "center",
  },
});

export default styles;
