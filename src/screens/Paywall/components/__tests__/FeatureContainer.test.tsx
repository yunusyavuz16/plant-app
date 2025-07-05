import React from 'react';
import { render } from '@testing-library/react-native';
import FeatureContainer from '../FeatureContainer';
import { TEXTS } from '@/constants/text';

// Mock the text constants
jest.mock('@/constants/text', () => ({
  TEXTS: {
    PAYWALL: {
      FEATURES: {
        UNLIMITED: 'Unlimited Access',
        UNLIMITED_DESC: 'Access to all features',
        FASTER: 'Faster Response',
        FASTER_DESC: 'Get quick responses',
        DETAILED: 'Detailed Care',
        DETAILED_DESC: 'Comprehensive plant care',
      },
    },
  },
}));

// Mock the icons
jest.mock('@/components/icons/UnlimitedIcon', () => ({
  UnlimitedIcon: jest.fn().mockReturnValue(null),
}));

jest.mock('@/components/icons/SpeedIcon', () => ({
  SpeedIcon: jest.fn().mockReturnValue(null),
}));

// Mock the care icon image
jest.mock('../../../../assets/paywall/care-icon.png', () => 'care-icon.png');

// Mock styles
jest.mock('../../PaywallScreen.styles', () => ({
  __esModule: true,
  default: {
    featuresRow: {
      paddingHorizontal: 24,
    },
  },
}));

describe('FeatureContainer', () => {
  it('renders ScrollView with correct props', () => {
    const { getByTestId } = render(<FeatureContainer testID="feature-container" />);

    const scrollView = getByTestId('feature-container');
    expect(scrollView.props.horizontal).toBe(true);
    expect(scrollView.props.showsHorizontalScrollIndicator).toBe(false);
    expect(scrollView.props.style).toEqual({
      paddingHorizontal: 24,
    });
  });

  it('renders all feature cards with correct content', () => {
    const { getByText, getAllByTestId } = render(<FeatureContainer />);

    // Check if all feature titles are rendered
    expect(getByText(TEXTS.PAYWALL.FEATURES.UNLIMITED)).toBeTruthy();
    expect(getByText(TEXTS.PAYWALL.FEATURES.FASTER)).toBeTruthy();
    expect(getByText(TEXTS.PAYWALL.FEATURES.DETAILED)).toBeTruthy();

    // Check if all feature descriptions are rendered
    expect(getByText(TEXTS.PAYWALL.FEATURES.UNLIMITED_DESC)).toBeTruthy();
    expect(getByText(TEXTS.PAYWALL.FEATURES.FASTER_DESC)).toBeTruthy();
    expect(getByText(TEXTS.PAYWALL.FEATURES.DETAILED_DESC)).toBeTruthy();

    // Check if all feature cards are rendered
    const featureCards = getAllByTestId('feature-card');
    expect(featureCards).toHaveLength(3);
  });

  // Snapshot test
  it('matches snapshot', () => {
    const { toJSON } = render(<FeatureContainer />);
    expect(toJSON()).toMatchSnapshot();
  });
});