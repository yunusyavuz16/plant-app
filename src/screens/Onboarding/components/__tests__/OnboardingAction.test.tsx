import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import OnboardingAction from '../OnboardingAction';
import { OnboardingScreenKeyType } from '@/constants/screen';

// Mock styles
jest.mock('../../WelcomeScreen.styles', () => ({
  __esModule: true,
  default: {
    buttonContainer: {
      paddingHorizontal: 24,
      width: '100%',
    },
  },
}));

// Mock navigation
const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

// Mock PrimaryButton component
jest.mock('@/components/PrimaryButton/PrimaryButton', () => {
  return function MockPrimaryButton({ label, onPress }: { label: string; onPress: () => void }) {
    const { Pressable, Text } = require('react-native');
    return (
      <Pressable testID="primary-button" onPress={onPress}>
        <Text>{label}</Text>
      </Pressable>
    );
  };
});

describe('OnboardingAction', () => {
  const mockProps = {
    label: 'Get Started',
    screenName: 'FEATURES' as OnboardingScreenKeyType,
    style: { marginTop: 20 },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with given props', () => {
    const { getByTestId, getByText } = render(<OnboardingAction {...mockProps} />);

    // Check if button container is rendered
    const buttonContainer = getByTestId('button-container');
    expect(buttonContainer).toBeTruthy();

    // Check if PrimaryButton is rendered with correct label
    expect(getByText('Get Started')).toBeTruthy();
  });

  it('navigates to correct screen when pressed', () => {
    const { getByTestId } = render(<OnboardingAction {...mockProps} />);

    // Simulate button press
    fireEvent.press(getByTestId('primary-button'));

    // Check if navigation was called with correct screen name
    expect(mockNavigate).toHaveBeenCalledWith('FEATURES');
  });

  it('applies custom styles when provided', () => {
    const { getByTestId } = render(<OnboardingAction {...mockProps} />);

    // Check if custom styles are applied to container
    const buttonContainer = getByTestId('button-container');
    expect(buttonContainer.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ marginTop: 20 }),
      ])
    );
  });
});