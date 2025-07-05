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

// Mock safe area context
jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
  SafeAreaProvider: ({ children }) => children,
}));

// Mock redux hooks
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve(null)),
  removeItem: jest.fn(() => Promise.resolve()),
  clear: jest.fn(() => Promise.resolve()),
  getAllKeys: jest.fn(() => Promise.resolve([])),
  multiGet: jest.fn(() => Promise.resolve([])),
  multiSet: jest.fn(() => Promise.resolve()),
  multiRemove: jest.fn(() => Promise.resolve()),
}));