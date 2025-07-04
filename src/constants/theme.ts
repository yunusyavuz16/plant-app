export const colors = {
  // Primary Colors
  primary: {
    green: '#28AF6E',
    dark: '#13231B',
  },

  // Background Colors
  background: {
    white: '#FFFFFF',
    lightGray: '#FBFAFA',
    darkGreen: '#101E17',
    lightGreen: '#F4F6F6',
    darkBrown: '#24201A',
  },

  // Text Colors
  text: {
    primary: '#13231B',
    primaryLight: '#13231B70',
    secondary: '#7C8471',
    white: '#FFFFFF',
    lightWhite: '#FFFFFF70',
    gold: '#E5C990',
    darkGray: '#6A7B6E',
    lightGreen: '#59716570',
  },

  // Border Colors
  border: {
    light: '#3C3C4325',
    green: '#29BB8918',
    white: 'rgba(255,255,255,0.3)',
  },

  // Status Colors
  status: {
    error: '#E82C13',
  },

  // Overlay Colors
  overlay: {
    dark: 'rgba(0, 0, 0, 0.3)',
    green: 'rgba(40,175,110,0.08)',
    white: 'rgba(255,255,255,0.08)',
    darkTransparent: 'rgba(255,255,255,0.52)',
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const typography = {
  fonts: {
    Rubik: 'Rubik',
    SFProText: 'SFProText',
    RubikSemiBold: 'Rubik-SemiBold',
    SFProTextBold: 'SFProText-Bold',
    RubikExtraBold: 'Rubik-ExtraBold',
    RubikMedium: 'Rubik-Medium',
    RubikLight: 'Rubik-Light',
    RubikRegular: 'Rubik-Regular',
  },
  size: {
    xs: 9,
    sm: 11,
    base: 13,
    md: 15,
    lg: 16,
    xlg: 17,
    xl: 18,
    xxl: 20,
    xxxl: 24,
    display: 28,
    huge: 32,
  },
  weight: {
    regular: "400",
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
    black: '900',
  },
  lineHeight: {
    sm: 18,
    base: 24,
    lg: 34,
  },
};

export const layout = {
  // Border Radius
  radius: {
    xs: 3,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 14,
    xxl: 16,
  },

  // Component Sizes
  button: {
    height: 56,
  },
  searchBar: {
    height: 44,
  },
  icon: {
    sm: 24,
    md: 36,
  },
  badge: {
    size: 16,
  },
  card: {
    categoryHeight: 160,
    questionHeight: 164,
    questionWidth: 240,
  },
};

// Common style mixins
export const mixins = {
  shadow: {
    textShadow: {
      textShadowColor: 'rgba(0, 0, 0, 0.25)',
      textShadowOffset: { width: 0, height: 4 },
      textShadowRadius: 4,
    },
  },
};