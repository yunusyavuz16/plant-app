import React from 'react';
import { render } from '@testing-library/react-native';
import FeatureCard from '../FeatureCard';
import { Image, View } from 'react-native';

// Mock styles
jest.mock('../../PaywallScreen.styles', () => ({
  __esModule: true,
  default: {
    featureCard: {
      alignItems: 'center',
      marginBottom: 24,
    },
    featureIconImage: {
      width: 48,
      height: 48,
      marginBottom: 12,
    },
    featureIconImageSvg: {
      width: 48,
      height: 48,
      marginBottom: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    featureTitle: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 8,
      textAlign: 'center',
    },
    featureDesc: {
      fontSize: 14,
      textAlign: 'center',
      color: '#666',
    },
  },
}));

describe('FeatureCard', () => {
  const mockImageSource = { uri: 'test-image.png' };
  const mockTitle = 'Test Feature';
  const mockDesc = 'Test Description';

  const MockSvgIcon = () => (
    <View testID="mock-svg-icon">
      <View />
    </View>
  );

  it('renders correctly with image icon', () => {
    const { getByTestId, getByText } = render(
      <FeatureCard
        icon={mockImageSource}
        title={mockTitle}
        desc={mockDesc}
        testID="feature-card"
      />
    );

    // Check if image is rendered
    const image = getByTestId('feature-icon-image');
    expect(image).toBeTruthy();
    expect(image.props.source).toBe(mockImageSource);
    expect(image.props.resizeMode).toBe('contain');

    // Check if texts are rendered
    expect(getByText(mockTitle)).toBeTruthy();
    expect(getByText(mockDesc)).toBeTruthy();
  });

  it('renders correctly with SVG icon', () => {
    const { getByTestId, getByText, queryByTestId } = render(
      <FeatureCard
        icon={<MockSvgIcon />}
        title={mockTitle}
        desc={mockDesc}
        testID="feature-card"
      />
    );

    // Check if SVG container is rendered
    const svgContainer = getByTestId('feature-icon-svg');
    expect(svgContainer).toBeTruthy();

    // Check if SVG icon is rendered
    expect(getByTestId('mock-svg-icon')).toBeTruthy();

    // Ensure image is not rendered when using SVG
    expect(queryByTestId('feature-icon-image')).toBeNull();

    // Check if texts are rendered
    expect(getByText(mockTitle)).toBeTruthy();
    expect(getByText(mockDesc)).toBeTruthy();
  });

  it('applies correct styles', () => {
    const { getByTestId } = render(
      <FeatureCard
        icon={mockImageSource}
        title={mockTitle}
        desc={mockDesc}
        testID="feature-card"
      />
    );

    const card = getByTestId('feature-card');
    const image = getByTestId('feature-icon-image');
    const title = getByTestId('feature-title');
    const desc = getByTestId('feature-desc');

    // Check container styles
    expect(card.props.style).toEqual({
      alignItems: 'center',
      marginBottom: 24,
    });

    // Check image styles
    expect(image.props.style).toEqual({
      width: 48,
      height: 48,
      marginBottom: 12,
    });

    // Check text styles
    expect(title.props.style).toEqual({
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 8,
      textAlign: 'center',
    });

    expect(desc.props.style).toEqual({
      fontSize: 14,
      textAlign: 'center',
      color: '#666',
    });
  });

  // Snapshot tests
  it('matches snapshot with image icon', () => {
    const { toJSON } = render(
      <FeatureCard
        icon={mockImageSource}
        title={mockTitle}
        desc={mockDesc}
      />
    );
    expect(toJSON()).toMatchSnapshot('with image icon');
  });

  it('matches snapshot with SVG icon', () => {
    const { toJSON } = render(
      <FeatureCard
        icon={<MockSvgIcon />}
        title={mockTitle}
        desc={mockDesc}
      />
    );
    expect(toJSON()).toMatchSnapshot('with SVG icon');
  });
});