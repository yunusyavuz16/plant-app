import { StyleSheet } from "react-native";
import { colors, layout, mixins, spacing, typography } from "../../constants/theme";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
  },
  header: {
    alignItems: "flex-start",
    marginBottom: spacing.md,
    paddingHorizontal: spacing.xxl,
    backgroundColor: "transparent",
  },
  titleRow: {
    position: "relative",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-end",
  },
  title: {
    fontSize: typography.size.display,
    fontFamily: typography.fonts.RubikMedium,
    color: colors.text.primary,
    lineHeight: typography.lineHeight.lg,
    ...mixins.shadow.textShadow,
  },
  titleHighlight: {
    fontFamily: typography.fonts.RubikExtraBold,
    color: colors.text.primary,
  },
  brushImage: {
    position: "absolute",
    left: 112,
    bottom: -20,
    width: 200,
    height: 16,
    zIndex: -1,
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
    bottom: -50,
  },
  bottom: {
    alignItems: "center",
    paddingHorizontal: spacing.xxl,
  },
  buttonContainer: {
    width: "100%",
    marginBottom: spacing.sm,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: spacing.lg,
    marginBottom: spacing.xl,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: layout.radius.xs,
    backgroundColor: "#E5E5E5",
    marginHorizontal: spacing.xs,
  },
  dotActive: {
    backgroundColor: colors.text.primary,
    width: 8,
    height: 8,
    borderRadius: layout.radius.sm,
  },
});

export default styles;
