import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import renderer, { act } from 'react-test-renderer';
import { mockStyles, mockTheme } from '../__mocks__/styles';

// Mock the theme constants
jest.mock('@/constants/theme', () => mockTheme);

// Mock the safe area context
jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({
    top: 47,
    right: 0,
    bottom: 34,
    left: 0,
  }),
}));

// Mock the styles
jest.mock('../CloseButton.styles', () => ({
  styles: mockStyles,
  getTopStyle: (insets: any) => ({
    top: insets.top + mockTheme.spacing.xxl,
  }),
}));

// Import the component after all mocks are set up
const CloseButton = require('../CloseButton').default;

describe('CloseButton', () => {
  const defaultProps = {
    handleClose: jest.fn(),
  };

  const renderComponent = (props = defaultProps) => {
    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(<CloseButton {...props} />);
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

  it('renders with correct structure', () => {
    const component = renderComponent();
    const touchable = component.root.findByType(TouchableOpacity);
    const text = component.root.findByType(Text);

    expect(touchable).toBeTruthy();
    expect(text).toBeTruthy();
    expect(text.props.children).toBe('×');
  });

  it('applies correct styles', () => {
    const component = renderComponent();
    const touchable = component.root.findByType(TouchableOpacity);
    const text = component.root.findByType(Text);

    // Check button styles
    expect(touchable.props.style).toEqual([
      expect.objectContaining({
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 17,
        right: 17,
        zIndex: 10,
      }),
      expect.objectContaining({
        top: 71, // Mocked insets.top (47) + spacing.xxl (24)
      }),
    ]);

    // Check text styles
    expect(text.props.style).toEqual(expect.objectContaining({
      color: '#FFFFFF',
      fontSize: 24,
      textAlign: 'center',
      fontWeight: '400',
    }));
  });

  it('calls handleClose when pressed', () => {
    const mockHandleClose = jest.fn();
    const component = renderComponent({ handleClose: mockHandleClose });
    const touchable = component.root.findByType(TouchableOpacity);

    act(() => {
      touchable.props.onPress();
    });

    expect(mockHandleClose).toHaveBeenCalledTimes(1);
  });

  it('uses safe area insets correctly', () => {
    const component = renderComponent();
    const touchable = component.root.findByType(TouchableOpacity);

    // Check if the top style is calculated correctly using the mocked insets
    expect(touchable.props.style[1]).toEqual({
      top: 71, // Mocked insets.top (47) + spacing.xxl (24)
    });
  });

  it('handles multiple presses correctly', () => {
    const mockHandleClose = jest.fn();
    const component = renderComponent({ handleClose: mockHandleClose });
    const touchable = component.root.findByType(TouchableOpacity);

    // Simulate multiple presses
    act(() => {
      touchable.props.onPress();
      touchable.props.onPress();
      touchable.props.onPress();
    });

    expect(mockHandleClose).toHaveBeenCalledTimes(3);
  });

  it('handles undefined handleClose prop gracefully', () => {
    // This test ensures the component doesn't crash if handleClose is undefined
    expect(() => {
      renderComponent({ handleClose: undefined as any });
    }).not.toThrow();
  });
});