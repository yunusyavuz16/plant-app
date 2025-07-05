import React from 'react';
import { Text, Pressable } from 'react-native';
import renderer, { act } from 'react-test-renderer';
import { mockStyles, mockTheme } from '../__mocks__/dataErrorViewStyles';

// Mock the theme constants
jest.mock('@/constants/theme', () => mockTheme);

// Mock the styles
jest.mock('../DataErrorView.style', () => ({
  styles: mockStyles,
}));

// Mock react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const View = require('react-native').View;
  return {
    View,
    FadeIn: {
      duration: () => ({
        // Mock animation object
        build: () => ({
          randomId: 'mock-animation',
        }),
      }),
    },
    createAnimatedComponent: (component: any) => component,
  };
});

// Import the component after all mocks are set up
const DataErrorView = require('../DataErrorView').default;

interface DataErrorViewProps {
  message?: string;
  errorDetails?: string;
  onRetry: () => void;
}

describe('DataErrorView', () => {
  const defaultProps: DataErrorViewProps = {
    onRetry: jest.fn(),
  };

  const renderComponent = (props: DataErrorViewProps = defaultProps) => {
    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(<DataErrorView {...props} />);
    });
    return component!;
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const tree = renderComponent().toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with default message when no message prop is provided', () => {
    const component = renderComponent();
    const messageText = component.root.findByProps({ style: mockStyles.message });
    expect(messageText.props.children).toBe('Unable to load content');
  });

  it('renders with custom message when provided', () => {
    const customMessage = 'Custom error message';
    const component = renderComponent({ ...defaultProps, message: customMessage });
    const messageText = component.root.findByProps({ style: mockStyles.message });
    expect(messageText.props.children).toBe(customMessage);
  });

  it('renders error details when provided', () => {
    const errorDetails = 'Detailed error information';
    const component = renderComponent({ ...defaultProps, errorDetails });
    const detailsText = component.root.findByProps({ style: mockStyles.details });
    expect(detailsText.props.children).toBe(errorDetails);
  });

  it('does not render error details when not provided', () => {
    const component = renderComponent();
    const detailsTexts = component.root.findAllByProps({ style: mockStyles.details });
    expect(detailsTexts).toHaveLength(0);
  });

  it('calls onRetry when retry button is pressed', () => {
    const mockOnRetry = jest.fn();
    const component = renderComponent({ ...defaultProps, onRetry: mockOnRetry });
    const retryButton = component.root.findByType(Pressable);

    act(() => {
      retryButton.props.onPress();
    });

    expect(mockOnRetry).toHaveBeenCalledTimes(1);
  });

  it('renders with correct structure', () => {
    const component = renderComponent();

    // Check main container
    const container = component.root.findByProps({ style: mockStyles.container });
    expect(container).toBeTruthy();

    // Check content container
    const content = component.root.findByProps({ style: mockStyles.content });
    expect(content).toBeTruthy();

    // Check icon container and icon
    const iconContainer = component.root.findByProps({ style: mockStyles.iconContainer });
    expect(iconContainer).toBeTruthy();
    const icon = component.root.findByProps({ style: mockStyles.icon });
    expect(icon.props.children).toBe('⚠️');

    // Check retry button and text
    const retryButton = component.root.findByType(Pressable);
    expect(retryButton).toBeTruthy();
    const retryText = component.root.findByProps({ style: mockStyles.retryText });
    expect(retryText.props.children).toBe('Try Again');
  });

  it('applies correct styles', () => {
    const component = renderComponent();

    // Check container styles
    const container = component.root.findByProps({ style: mockStyles.container });
    expect(container.props.style).toEqual(expect.objectContaining({
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 24,
      backgroundColor: '#FFFFFF',
    }));

    // Check message styles
    const message = component.root.findByProps({ style: mockStyles.message });
    expect(message.props.style).toEqual(expect.objectContaining({
      fontFamily: 'Rubik-Medium',
      fontSize: 18,
      color: '#000000',
      textAlign: 'center',
      marginBottom: 12,
    }));

    // Check retry button styles
    const retryButton = component.root.findByProps({ style: mockStyles.retryButton });
    expect(retryButton.props.style).toEqual(expect.objectContaining({
      backgroundColor: '#000000',
      paddingHorizontal: 24,
      paddingVertical: 12,
      borderRadius: 12,
      marginTop: 12,
    }));
  });

  it('handles multiple retry attempts', () => {
    const mockOnRetry = jest.fn();
    const component = renderComponent({ ...defaultProps, onRetry: mockOnRetry });
    const retryButton = component.root.findByType(Pressable);

    // Simulate multiple presses
    act(() => {
      retryButton.props.onPress();
      retryButton.props.onPress();
      retryButton.props.onPress();
    });

    expect(mockOnRetry).toHaveBeenCalledTimes(3);
  });

  it('handles undefined onRetry prop gracefully', () => {
    // This test ensures the component doesn't crash if onRetry is undefined
    expect(() => {
      renderComponent({ onRetry: undefined as any });
    }).not.toThrow();
  });
});