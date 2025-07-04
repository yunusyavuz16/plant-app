import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "../../constants/theme";

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
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
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: spacing.xxl,
    alignItems: "flex-start",
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: typography.size.display,
    fontWeight: '400',
    color: colors.text.primary,
    textAlign: "left",
    lineHeight: typography.lineHeight.lg,
  },
  titleHighlight: {
    color: colors.text.primary,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: typography.size.xl,
    color: colors.text.secondary,
    marginTop: spacing.sm,
    lineHeight: typography.lineHeight.base,
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
    color: colors.text.secondary,
    textAlign: "center",
    lineHeight: typography.lineHeight.sm,
    paddingHorizontal: spacing.sm,
    width: "100%",
  },
  link: {
    textDecorationLine: "underline",
    color: colors.text.secondary,
    fontWeight: '500',
  },
});

export default styles;
