// Mock React Native's Platform
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'ios',
  select: jest.fn((obj) => obj.ios),
}));

// Mock React Native's Dimensions
jest.mock('react-native/Libraries/Utilities/Dimensions', () => ({
  get: jest.fn().mockReturnValue({
    width: 375,
    height: 812,
  }),
}));

// Mock StyleSheet
jest.mock('react-native/Libraries/StyleSheet/StyleSheet', () => ({
  create: (styles) => styles,
  hairlineWidth: 1,
  absoluteFill: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 },
  flatten: (style) => {
    if (Array.isArray(style)) {
      return Object.assign({}, ...style);
    }
    return style || {};
  },
  compose: jest.fn(),
}));

// Mock PixelRatio
jest.mock('react-native/Libraries/Utilities/PixelRatio', () => ({
  get: jest.fn(() => 1),
  getFontScale: jest.fn(() => 1),
  getPixelSizeForLayoutSize: jest.fn((size) => size),
  roundToNearestPixel: jest.fn((size) => size),
}));

// Mock accessibility helpers
jest.mock('@testing-library/react-native/build/helpers/accessibility', () => ({
  isSubtreeInaccessible: () => false,
  flatten: (arr) => arr || [],
  isHiddenFromAccessibility: () => false,
}));