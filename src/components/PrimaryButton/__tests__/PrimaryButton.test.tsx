import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import PrimaryButton from '../PrimaryButton';

// Mock styles
jest.mock('../PrimaryButton.styles', () => ({
  __esModule: true,
  default: {
    container: {
      width: '100%',
      backgroundColor: '#4CAF50',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      height: 48,
    },
    label: {
      color: '#FFFFFF',
      fontSize: 16,
      fontFamily: 'SFProText-Bold',
      letterSpacing: 0.5,
    },
  },
}));

describe('PrimaryButton', () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const { queryByText } = render(
      <PrimaryButton label="Test Button" onPress={mockOnPress} />
    );
    const textElement = queryByText('Test Button');
    expect(textElement).not.toBeNull();
  });

  it('calls onPress when pressed', () => {
    const { queryByText } = render(
      <PrimaryButton label="Test Button" onPress={mockOnPress} />
    );
    const textElement = queryByText('Test Button');
    expect(textElement).not.toBeNull();
    if (textElement?.parent) {
      fireEvent.press(textElement.parent);
      expect(mockOnPress).toHaveBeenCalledTimes(1);
    }
  });

  it('displays the correct label', () => {
    const testLabel = "Test Label";
    const { queryByText } = render(
      <PrimaryButton label={testLabel} onPress={mockOnPress} />
    );
    const textElement = queryByText(testLabel);
    expect(textElement).not.toBeNull();
  });

  it('handles multiple presses', () => {
    const { queryByText } = render(
      <PrimaryButton label="Test Button" onPress={mockOnPress} />
    );
    const textElement = queryByText('Test Button');
    expect(textElement).not.toBeNull();
    if (textElement?.parent) {
      fireEvent.press(textElement.parent);
      fireEvent.press(textElement.parent);
      fireEvent.press(textElement.parent);
      expect(mockOnPress).toHaveBeenCalledTimes(3);
    }
  });
});