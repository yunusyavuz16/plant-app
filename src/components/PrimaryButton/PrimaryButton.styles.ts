import { StyleSheet } from 'react-native';
import { colors, layout, typography } from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.primary.green,
    borderRadius: layout.radius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    height: layout.button.height,
    marginHorizontal: 0,
  },
  label: {
    color: colors.text.white,
    fontSize: typography.size.md,
    fontFamily: typography.fonts.SFProTextBold,
    letterSpacing: 0.5,
  },
});

export default styles;