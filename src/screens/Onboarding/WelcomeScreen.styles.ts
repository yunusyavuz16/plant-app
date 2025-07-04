import { Dimensions, StyleSheet, Platform } from "react-native";
import { colors, spacing, typography } from "../../constants/theme";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  safeArea: {
    flex: 1,
  },
  image: {
    top: spacing.lg,
    height: "100%",
  },
  backgroundImage: {
    flex: 1,
    height: height,
    width: width,
  },
  container: {
    flex: 1,
    margin: 0,
  },
  header: {
    paddingHorizontal: spacing.xxl,
    alignItems: "flex-start",
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: typography.size.display,
    color: colors.text.primary,
    textAlign: "left",
    lineHeight: typography.lineHeight.lg,
    fontFamily: typography.fonts.Rubik,
  },
  titleHighlight: {
    color: colors.text.primary,
    fontFamily: typography.fonts.RubikSemiBold,
  },
  subtitle: {
    fontSize: typography.size.xl,
    color: colors.text.primaryLight,
    marginTop: spacing.sm,
    lineHeight: typography.lineHeight.base,
    fontFamily: typography.fonts.Rubik,
  },
  bottom: {
    justifyContent: "flex-end",
    paddingHorizontal: spacing.xxl,
  },
  buttonContainer: {
    alignItems: "center",
    width: "100%",
    height: 56,
  },
  bottomInner: {
    alignItems: "center",
    marginTop: spacing.lg,
    width: "100%",
  },
  disclaimer: {
    fontSize: typography.size.sm,
    color: colors.text.lightGreen,
    textAlign: "center",
    lineHeight: typography.lineHeight.sm,
    paddingHorizontal: spacing.sm,
    fontFamily: typography.fonts.Rubik,
    width: "100%",
  },
  link: {
    fontFamily: typography.fonts.Rubik,
    fontSize: typography.size.sm,
    color: colors.text.lightGreen,
    textDecorationLine: "underline",
  },
});

export default styles;
