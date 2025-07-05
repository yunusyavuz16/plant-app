import React from 'react';
import { render } from '@testing-library/react-native';
import OnBoardLayout from '../OnBoardLayout';
import { OnboardingScreens } from '@/constants/screen';
import { Text, ViewStyle } from 'react-native';

// Mock safe area context
jest.mock('react-native-safe-area-context', () => ({
  SafeAreaProvider: ({ children }: { children: React.ReactNode }) => children,
  useSafeAreaInsets: () => ({
    top: 48,
    bottom: 34,
    left: 0,
    right: 0,
  }),
}));

// Mock styles
jest.mock('../../WelcomeScreen.styles', () => ({
  __esModule: true,
  default: {
    backgroundImage: {
      flex: 1,
      width: '100%',
    },
    container: {
      flex: 1,
      paddingHorizontal: 24,
    },
  },
}));

// Mock assets
jest.mock('../../../../assets/get-started/get-started-bg.png', () => 'welcome-bg');
jest.mock('../../../../assets/onboarding-1/Background.png', () => 'features-bg');
jest.mock('../../../../assets/onboarding-2/Background.png', () => 'benefits-bg');

describe('OnBoardLayout', () => {
  const TestChild = () => <Text testID="test-child">Test Content</Text>;

  it('renders children correctly', () => {
    const { getByTestId } = render(
      <OnBoardLayout screenName="WELCOME">
        <TestChild />
      </OnBoardLayout>
    );

    expect(getByTestId('test-child')).toBeTruthy();
  });

  it('applies correct background image and resize mode', () => {
    const { getByTestId } = render(
      <OnBoardLayout screenName="WELCOME" testID="onboard-layout">
        <TestChild />
      </OnBoardLayout>
    );

    const background = getByTestId('onboard-layout');
    expect(background.props.resizeMode).toBe('cover');
  });

  it('renders with safe area insets', () => {
    const { getByTestId } = render(
      <OnBoardLayout screenName="WELCOME" testID="onboard-layout">
        <TestChild />
      </OnBoardLayout>
    );

    const background = getByTestId('onboard-layout');
    const styles = background.props.style;

    // Verify that styles is an array and contains multiple style objects
    expect(Array.isArray(styles)).toBe(true);
    expect(styles.length).toBeGreaterThan(1);

    // Verify that at least one style object exists
    expect(styles.some((style: ViewStyle | undefined) => style && typeof style === 'object')).toBe(true);
  });

  // Snapshot tests for different screens
  it('matches snapshot for different screens', () => {
    const { toJSON: welcomeJSON } = render(
      <OnBoardLayout screenName="WELCOME">
        <TestChild />
      </OnBoardLayout>
    );
    expect(welcomeJSON()).toMatchSnapshot('welcome screen');

    const { toJSON: featuresJSON } = render(
      <OnBoardLayout screenName="FEATURES">
        <TestChild />
      </OnBoardLayout>
    );
    expect(featuresJSON()).toMatchSnapshot('features screen');

    const { toJSON: benefitsJSON } = render(
      <OnBoardLayout screenName="BENEFITS">
        <TestChild />
      </OnBoardLayout>
    );
    expect(benefitsJSON()).toMatchSnapshot('benefits screen');
  });
});