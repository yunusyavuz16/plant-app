import { StyleSheet } from "react-native";
import { colors, layout, spacing, typography } from "../../constants/theme";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    alignItems: "flex-start",
    paddingHorizontal: spacing.xxl,
    marginBottom: spacing.xl,
  },
  titleContainer: {
    alignItems: "flex-start",
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    position: "relative",
  },
  titleHighlight: {
    fontFamily: typography.fonts.RubikExtraBold,
  },
  title: {
    fontSize: typography.size.display,
    fontFamily: typography.fonts.RubikMedium,
    color: colors.text.primary,
    lineHeight: typography.lineHeight.lg,
  },
  brushImage: {
    width: 150,
    height: 12,
    position: "absolute",
    bottom: -15,
    right: -20,
  },
  imageContainer: {
    justifyContent: "flex-end",
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  image: {
    flex: 1,
    height: "100%",
  },
  bottom: {
    paddingHorizontal: spacing.xxl,
    alignItems: "center",
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
