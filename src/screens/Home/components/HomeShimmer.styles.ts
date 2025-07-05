import { layout, spacing } from "@/constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.xxl,
    paddingTop: spacing.xxl,
    backgroundColor: "#fff",
  },
  premiumBanner: {
    height: 72,
    borderRadius: layout.radius.lg,
    marginBottom: spacing.xxl,
  },
  sectionTitle: {
    width: 120,
    height: 24,
    borderRadius: layout.radius.sm,
    marginBottom: spacing.lg,
  },
  row: {
    flexDirection: "row",
    marginBottom: spacing.xxl,
  },
  questionCard: {
    marginRight: spacing.sm,
    width: layout.card.questionWidth,
    height: layout.card.questionHeight,
    borderRadius: layout.radius.lg,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: spacing.xl,
  },
  categoryCard: {
    width: layout.card.categoryHeight,
    height: layout.card.categoryHeight,
    borderRadius: layout.radius.lg,
  },
});

export default styles;
