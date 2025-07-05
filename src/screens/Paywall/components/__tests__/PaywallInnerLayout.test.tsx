import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import PaywallInnerLayout from '../PaywallInnerLayout';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Mock the safe area context
jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: jest.fn(),
}));

// Mock styles
jest.mock('../../PaywallScreen.styles', () => ({
  __esModule: true,
  default: {
    content: {
      backgroundColor: '#FFFFFF',
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
    },
  },
}));

// Mock Dimensions
const mockDimensions = {
  width: 390,
  height: 844,
};

jest.mock('react-native', () => {
  const RN = {
    Dimensions: {
      get: jest.fn((dim: 'window' | 'screen') => {
        if (dim === 'window') {
          return mockDimensions;
        }
        return mockDimensions;
      }),
    },
    View: 'View',
    Text: 'Text',
  };
  return RN;
});

describe('PaywallInnerLayout', () => {
  const mockInsets = {
    top: 47,
    bottom: 34,
    left: 0,
    right: 0,
  };

  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();

    // Setup default mock values
    (useSafeAreaInsets as jest.Mock).mockReturnValue(mockInsets);
  });

  it('renders children correctly', () => {
    const testMessage = 'Test Content';
    const { getByText } = render(
      <PaywallInnerLayout>
        <Text>{testMessage}</Text>
      </PaywallInnerLayout>
    );

    expect(getByText(testMessage)).toBeTruthy();
  });

  it('calculates marginTop correctly based on screen height and insets', () => {
    const CONST_HEIGHT_CONTENT = 612; // From the component
    const { getByTestId } = render(
      <PaywallInnerLayout>
        <Text>Content</Text>
      </PaywallInnerLayout>
    );

    const expectedMarginTop = mockDimensions.height - CONST_HEIGHT_CONTENT - mockInsets.bottom - mockInsets.top;
    const container = getByTestId('paywall-inner-layout');

    expect(container.props.style[1]).toEqual({
      marginTop: expectedMarginTop,
    });
  });

  it('uses safe area insets', () => {
    render(
      <PaywallInnerLayout>
        <Text>Content</Text>
      </PaywallInnerLayout>
    );

    expect(useSafeAreaInsets).toHaveBeenCalled();
  });

  it('handles different screen dimensions', () => {
    // Update dimensions mock for this test
    const newDimensions = {
      width: 428,
      height: 926,
    };

    const RN = require('react-native');
    RN.Dimensions.get.mockImplementation((dim: 'window' | 'screen') => {
      if (dim === 'window') {
        return newDimensions;
      }
      return newDimensions;
    });

    const CONST_HEIGHT_CONTENT = 612;
    const { getByTestId } = render(
      <PaywallInnerLayout>
        <Text>Content</Text>
      </PaywallInnerLayout>
    );

    const expectedMarginTop = newDimensions.height - CONST_HEIGHT_CONTENT - mockInsets.bottom - mockInsets.top;
    const container = getByTestId('paywall-inner-layout');

    expect(container.props.style[1]).toEqual({
      marginTop: expectedMarginTop,
    });
  });

  // Snapshot test
  it('matches snapshot', () => {
    const { toJSON } = render(
      <PaywallInnerLayout>
        <Text>Test Content</Text>
      </PaywallInnerLayout>
    );
    expect(toJSON()).toMatchSnapshot();
  });
});