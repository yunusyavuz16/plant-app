import { StyleSheet } from "react-native";
import { colors, layout, spacing, typography } from "../../constants/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.white,
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.background.lightGray,
  },
  header: {
    paddingHorizontal: spacing.xxl,
    paddingBottom: spacing.lg,
  },
  welcomeText: {
    fontSize: typography.size.lg,
    color: colors.text.primary,
    opacity: 0.7,
    marginBottom: spacing.xs,
  },
  greetingText: {
    fontSize: typography.size.xxxl,
    color: colors.text.primary,
    fontWeight: '600',
  },
  searchContainer: {
    paddingHorizontal: spacing.xxl,
    paddingBottom: spacing.md,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background.lightGray,
    borderWidth: 0.2,
    borderColor: colors.border.light,
    borderRadius: layout.radius.lg,
    paddingHorizontal: spacing.lg,
    height: layout.searchBar.height,
  },
  searchInput: {
    flex: 1,
    marginLeft: spacing.md,
    fontSize: typography.size.md,
    color: colors.text.primary,
  },
  premiumBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background.darkBrown,
    marginHorizontal: spacing.xxl,
    borderRadius: layout.radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.xxl,
    marginTop: spacing.xxl,
  },
  premiumIconContainer: {
    position: "relative",
    marginRight: spacing.lg,
  },
  notificationBadge: {
    position: "absolute",
    top: -spacing.xs,
    right: -spacing.xs,
    backgroundColor: colors.status.error,
    width: layout.badge.size,
    height: layout.badge.size,
    borderRadius: layout.badge.size / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationText: {
    color: colors.text.white,
    fontSize: typography.size.xs,
    fontWeight: '600',
  },
  premiumTextContainer: {
    flex: 1,
  },
  premiumTitle: {
    color: colors.text.gold,
    fontSize: typography.size.lg,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  premiumSubtitle: {
    color: colors.text.white,
    opacity: 0.7,
    fontSize: typography.size.base,
  },
  sectionContainer: {
    paddingHorizontal: spacing.xxl,
    marginBottom: spacing.xxl,
  },
  sectionTitle: {
    fontSize: typography.size.md,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: spacing.lg,
  },
  articlesRow: {
    marginHorizontal: -spacing.xxl,
  },
  articlesContent: {
    paddingHorizontal: spacing.xxl,
  },
  articleCard: {
    width: layout.card.questionWidth,
    height: layout.card.questionHeight,
    borderRadius: layout.radius.lg,
    overflow: "hidden",
  },
  articleImage: {
    width: "100%",
    height: "100%",
  },
  articleOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.overlay.dark,
  },
  articleTitle: {
    position: "absolute",
    bottom: spacing.lg,
    left: spacing.lg,
    right: spacing.lg,
    color: colors.text.white,
    fontSize: typography.size.md,
    fontWeight: '500',
  },
  marginLeft: {
    marginLeft: spacing.lg,
  },
  categoriesContainer: {
    paddingLeft: spacing.xxl,
    paddingRight: spacing.md,
    marginBottom: spacing.xxl,
  },
  categoriesGrid: {
    paddingBottom: spacing.lg,
    gap: spacing.md,
  },
  questionsGridContent: {
    flexDirection: "row",
    gap: spacing.sm,
  },
  categoryCard: {
    flex: 1,
    marginRight: spacing.md - 1,
    padding: spacing.lg,
    borderRadius: layout.radius.lg,
    backgroundColor: colors.background.lightGreen,
    borderWidth: 1,
    borderColor: colors.border.green,
    justifyContent: "space-between",
    minHeight: layout.card.categoryHeight,
  },
  categoryTitle: {
    fontSize: typography.size.lg,
    fontWeight: '600',
    textAlign: "left",
    marginBottom: spacing.sm,
  },
  categoryImage: {
    width: "100%",
    height: 100,
    borderRadius: layout.radius.md,
  },
  section: {
    paddingHorizontal: spacing.xxl,
    marginBottom: spacing.xxl,
  },
  questionsContainer: {
    paddingRight: spacing.xxl,
  },
  questionCard: {
    borderRadius: layout.radius.lg,
    overflow: "hidden",
    height: layout.card.questionHeight,
    width: layout.card.questionWidth,
  },
  questionBackground: {
    flex: 1,
    justifyContent: "flex-end",
  },
  questionBackgroundImage: {
    borderRadius: layout.radius.lg,
  },
  questionContent: {
    padding: spacing.lg,
  },
  questionTitle: {
    fontSize: typography.size.md,
    fontWeight: '500',
    color: colors.text.white,
    marginBottom: spacing.xs,
  },
  questionSubtitle: {
    fontSize: typography.size.base,
    color: colors.text.white,
    opacity: 0.8,
  },
});
