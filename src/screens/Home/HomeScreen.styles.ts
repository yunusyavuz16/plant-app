import { StyleSheet } from "react-native";
import { colors, layout, spacing, typography } from "../../constants/theme";

export default StyleSheet.create({
  contentContainer: {
    gap: spacing.md,
    paddingBottom: spacing.xxl,
  },
  columnWrapper: {
    gap: spacing.md,
    marginHorizontal: spacing.xxl,
  },
  innerContainer: {},
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
    fontFamily: typography.fonts.RubikRegular,
    color: colors.text.primary,
    marginBottom: spacing.xs,
  },
  greetingText: {
    fontSize: typography.size.xxxl,
    fontFamily: typography.fonts.RubikMedium,
    color: colors.text.primary,
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
    height: 64,
    marginHorizontal: spacing.xxl,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: colors.background.darkBrown,
    borderRadius: layout.radius.lg,
    marginBottom: spacing.xxl,
    padding: spacing.xl,
    marginTop: spacing.xxl,
  },
  premiumIconContainer: {
    justifyContent: "center",
    width: 32,
    height: 24,
    alignItems: "center",
    position: "relative",
    marginTop: spacing.xs,
    marginRight: spacing.xl,
  },
  notificationBadge: {
    position: "absolute",
    top: -spacing.xs - 2,
    right: -spacing.xs - 2,
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
    fontWeight: "600",
  },
  premiumTextContainer: {
    flex: 1,
  },
  premiumTitle: {},
  premiumTitleBold: {
    fontFamily: typography.fonts.SFProTextBold,
  },
  premiumSubtitle: {
    opacity: 0.8,
  },
  sectionContainer: {
    marginBottom: spacing.sm,
  },
  sectionTitle: {
    marginHorizontal: spacing.xxl,
    fontSize: typography.size.md,
    fontFamily: typography.fonts.RubikMedium,
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
    fontWeight: "500",
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
    paddingHorizontal: spacing.xxl,
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
    height: layout.card.questionHeight * 0.36,
    paddingHorizontal: spacing.lg,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  questionTitle: {
    fontSize: typography.size.md,
    fontFamily: typography.fonts.RubikMedium,
    color: colors.text.white,
    marginBottom: spacing.xs,
  },
  questionSubtitle: {
    fontSize: typography.size.base,
    color: colors.text.white,
    opacity: 0.8,
  },
});
