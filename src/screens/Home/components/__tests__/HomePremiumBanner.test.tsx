import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

// Mock navigation
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

// Mock Platform
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'ios',
  select: jest.fn((obj) => obj.ios),
}));

// Mock StyleSheet
jest.mock('react-native/Libraries/StyleSheet/StyleSheet', () => ({
  create: (styles: Record<string, any>) => styles,
  hairlineWidth: 1,
  absoluteFill: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 },
  flatten: (style: StyleSheet.NamedStyles<any> | StyleSheet.NamedStyles<any>[]) => {
    if (Array.isArray(style)) {
      return Object.assign({}, ...style);
    }
    return style || {};
  },
  compose: jest.fn(),
}));

// Mock accessibility helpers
jest.mock('@testing-library/react-native/build/helpers/accessibility', () => ({
  isSubtreeInaccessible: () => false,
  flatten: (arr: any[]) => arr || [],
  isHiddenFromAccessibility: () => false,
}));

// Mock map-props helper
jest.mock('@testing-library/react-native/build/helpers/map-props', () => ({
  mapProps: (props: any) => props,
  flatten: (style: any) => style || {},
}));

// Mock text constants
jest.mock('@/constants/text', () => ({
  TEXTS: {
    HOME: {
      PREMIUM_BANNER: {
        TITLE_BOLD: 'Unlock',
        TITLE_REGULAR: 'Premium',
        SUBTITLE: 'Get unlimited access to all features',
      },
    },
  },
}));

// Mock GradientText component
jest.mock('@/components/GradientText/GradientText', () => {
  const MockGradientText = jest.requireActual('react-native').Text;
  return {
    SvgGradientText: ({ text }: { text: string }) => (
      <MockGradientText testID="gradient-text">{text}</MockGradientText>
    ),
  };
});

// Mock icons
jest.mock('@/components/icons/ChevronRightIcon', () => 'ChevronRightIcon');
jest.mock('@/components/icons/MailIcon', () => 'MailIcon');

// Mock styles
jest.mock('../../HomeScreen.styles', () => ({
  premiumBanner: {},
  premiumIconContainer: {},
  notificationBadge: {},
  notificationText: {},
  premiumTextContainer: {},
  premiumTitle: {},
  premiumSubtitle: {},
}));

import HomePremiumBanner from '../HomePremiumBanner';

describe('HomePremiumBanner', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useNavigation as unknown as jest.Mock).mockReturnValue({ navigate: mockNavigate });
  });

  it('renders correctly with all elements', () => {
    const { getByTestId, getAllByTestId } = render(<HomePremiumBanner />);

    // Check main banner
    expect(getByTestId('premium-banner')).toBeTruthy();

    // Check notification badge
    expect(getByTestId('notification-badge')).toBeTruthy();
    expect(getByTestId('notification-badge')).toHaveTextContent('1');

    // Check text content
    const gradientTexts = getAllByTestId('gradient-text');
    expect(gradientTexts).toHaveLength(2);
    expect(gradientTexts[0]).toHaveTextContent('Unlock Premium');
    expect(gradientTexts[1]).toHaveTextContent('Get unlimited access to all features');
  });

  it('navigates to paywall screen when pressed', () => {
    const { getByTestId } = render(<HomePremiumBanner />);
    fireEvent.press(getByTestId('premium-banner'));
    expect(mockNavigate).toHaveBeenCalledWith('Paywall');
  });
});