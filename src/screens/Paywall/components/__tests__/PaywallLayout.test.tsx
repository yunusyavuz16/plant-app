import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import PaywallLayout from '../PaywallLayout';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Mock the safe area context
jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: jest.fn(),
}));

// Mock styles
jest.mock('../../PaywallScreen.styles', () => ({
  __esModule: true,
  default: {
    root: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    topImage: {
      width: '100%',
      position: 'absolute',
      top: 0,
    },
  },
}));

// Mock the image asset
jest.mock('../../../../assets/paywall/paywall-top.png', () => 'paywall-top.png');

// Mock React Native
jest.mock('react-native', () => {
  const mockDimensions = {
    width: 390,
    height: 844,
  };

  return {
    View: 'View',
    Text: 'Text',
    ImageBackground: 'ImageBackground',
    Dimensions: {
      get: jest.fn((dim: 'window' | 'screen') => mockDimensions),
    },
  };
});

describe('PaywallLayout', () => {
  const mockInsets = {
    top: 47,
    bottom: 34,
    left: 0,
    right: 0,
  };

  const mockDimensions = {
    width: 390,
    height: 844,
  };

  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();

    // Setup default mock values
    (useSafeAreaInsets as jest.Mock).mockReturnValue(mockInsets);
  });

  it('applies correct padding based on safe area insets', () => {
    const { getByTestId } = render(
      <PaywallLayout>
        <Text>Content</Text>
      </PaywallLayout>
    );

    const rootView = getByTestId('root-view');
    expect(rootView.props.style[1]).toEqual({
      paddingTop: mockInsets.top,
      paddingBottom: mockInsets.bottom,
    });
  });

  it('renders ImageBackground with correct props', () => {
    const { getByTestId } = render(
      <PaywallLayout>
        <Text>Content</Text>
      </PaywallLayout>
    );

    const imageBackground = getByTestId('image-background');
    expect(imageBackground.props.source).toBe('paywall-top.png');
    expect(imageBackground.props.resizeMode).toBe('cover');
    expect(imageBackground.props.style[1]).toEqual({
      height: mockDimensions.height * 0.58,
    });
  });

  it('handles different screen dimensions', () => {
    const newDimensions = {
      width: 428,
      height: 926,
    };

    const RN = require('react-native');
    RN.Dimensions.get.mockImplementation((dim: 'window' | 'screen') => newDimensions);

    const { getByTestId } = render(
      <PaywallLayout>
        <Text>Content</Text>
      </PaywallLayout>
    );

    const imageBackground = getByTestId('image-background');
    expect(imageBackground.props.style[1]).toEqual({
      height: newDimensions.height * 0.58,
    });
  });

  // Snapshot test
  it('matches snapshot', () => {
    const { toJSON } = render(
      <PaywallLayout>
        <Text>Test Content</Text>
      </PaywallLayout>
    );
    expect(toJSON()).toMatchSnapshot();
  });
});