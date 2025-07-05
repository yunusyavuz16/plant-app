import React from 'react';
import { View, ViewStyle, Linking } from 'react-native';
import { fireEvent, render } from '@testing-library/react-native';

// Mock Linking
const mockOpenURL = jest.fn().mockResolvedValue(true);
jest.spyOn(Linking, 'openURL').mockImplementation(mockOpenURL);

// Mock Image component
jest.mock('expo-image', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    ImageBackground: function MockImageBackground({ children, testID, style }: { children: React.ReactNode; testID?: string; style?: ViewStyle }) {
      return React.createElement(View, { testID, style }, children);
    },
  };
});

// Mock styles
jest.mock('../../HomeScreen.styles', () => ({
  questionCard: {},
  questionBackground: {},
  questionBackgroundImage: {},
  questionContent: {},
  questionTitle: {},
}));

// Import after mocks
import HomeQuestionItem from '../HomeQuestionItem';

describe('HomeQuestionItem', () => {
  const mockProps = {
    uri: 'https://test.com',
    title: 'Test Question',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const { getByTestId, getByText } = render(<HomeQuestionItem {...mockProps} />);

    // Check card and image elements
    expect(getByTestId('question-card')).toBeTruthy();
    expect(getByTestId('question-image')).toBeTruthy();

    // Check title text
    expect(getByText(mockProps.title)).toBeTruthy();
  });

  it('opens URL when pressed', async () => {
    const { getByTestId } = render(<HomeQuestionItem {...mockProps} />);
    fireEvent.press(getByTestId('question-card'));
    expect(mockOpenURL).toHaveBeenCalledWith('https://test.com');
  });
});