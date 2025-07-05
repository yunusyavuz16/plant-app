import React from 'react';
import renderer, { act } from 'react-test-renderer';
import CategoryItem from '../CategoryItem';

// Mock the styles before importing the component
jest.mock('../CategoryItem.styles', () => ({
  styles: {
    categoryCard: {
      flex: 1,
      paddingStart: 16,
      paddingTop: 16,
      borderRadius: 12,
      backgroundColor: '#F5F9F6',
      borderWidth: 1,
      borderColor: '#E5EBE6',
      justifyContent: 'space-between',
      minHeight: 180,
    },
    categoryTitle: {
      fontSize: 18,
      fontWeight: '600',
      textAlign: 'left',
      marginBottom: 8,
    },
    categoryImage: {
      width: '100%',
      height: 100,
      borderRadius: 8,
    },
  },
}));

// Mock React Native components
jest.mock('react-native', () => ({
  TouchableOpacity: 'TouchableOpacity',
  Text: 'Text',
  StyleSheet: {
    create: (styles: any) => styles,
  },
}));

// Mock the expo-image component
jest.mock('expo-image', () => ({
  Image: 'Image',
  ImageContentFit: {
    cover: 'cover',
    contain: 'contain',
  },
}));

describe('CategoryItem', () => {
  const defaultProps = {
    title: 'Test Category',
    url: 'https://example.com/test.jpg',
  };

  const renderComponent = (props = {}) => {
    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(<CategoryItem {...defaultProps} {...props} />);
    });
    return component!;
  };

  it('renders correctly with required props', () => {
    const tree = renderComponent().toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handles onPress callback', () => {
    const onPressMock = jest.fn();
    const component = renderComponent({ onPress: onPressMock });

    const touchable = component.root.findByProps({ testID: 'category-item' });
    act(() => {
      touchable.props.onPress();
    });

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('does not call onPress when no handler is provided', () => {
    const component = renderComponent();
    const touchable = component.root.findByProps({ testID: 'category-item' });

    // Should not throw when pressed
    act(() => {
      touchable.props.onPress();
    });
  });

  it('handles long titles gracefully', () => {
    const longTitle = 'This is a very long category title that might cause layout issues if not handled properly';
    const tree = renderComponent({ title: longTitle }).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with correct styles', () => {
    const component = renderComponent();
    const touchable = component.root.findByProps({ testID: 'category-item' });
    const title = component.root.findByProps({ children: defaultProps.title });

    expect(touchable.props.style[0]).toEqual(expect.objectContaining({
      flex: 1,
      paddingStart: 16,
      paddingTop: 16,
      borderRadius: 12,
      backgroundColor: '#F5F9F6',
      borderWidth: 1,
      borderColor: '#E5EBE6',
      justifyContent: 'space-between',
      minHeight: 180,
    }));

    expect(title.props.style[0]).toEqual(expect.objectContaining({
      fontSize: 18,
      fontWeight: '600',
      textAlign: 'left',
      marginBottom: 8,
    }));
  });

  it('applies custom styles correctly', () => {
    const customStyle = {
      backgroundColor: '#FF0000',
      padding: 20,
    };
    const customTitleStyle = {
      fontSize: 24,
      color: '#0000FF',
    };

    const component = renderComponent({
      style: customStyle,
      titleStyle: customTitleStyle,
    });

    const touchable = component.root.findByProps({ testID: 'category-item' });
    const title = component.root.findByProps({ children: defaultProps.title });

    expect(touchable.props.style).toEqual([
      expect.objectContaining({
        flex: 1,
        paddingStart: 16,
        paddingTop: 16,
      }),
      customStyle,
    ]);

    expect(title.props.style).toEqual([
      expect.objectContaining({
        fontSize: 18,
        fontWeight: '600',
      }),
      customTitleStyle,
    ]);
  });

  it('handles disabled state correctly', () => {
    const onPressMock = jest.fn();
    const component = renderComponent({
      disabled: true,
      onPress: onPressMock,
    });

    const touchable = component.root.findByProps({ testID: 'category-item' });
    expect(touchable.props.disabled).toBe(true);
    expect(touchable.props.accessibilityState).toEqual({ disabled: true });

    act(() => {
      touchable.props.onPress();
    });
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('sets correct accessibility properties', () => {
    const customAccessibilityLabel = 'Custom Category Label';
    const component = renderComponent({
      accessibilityLabel: customAccessibilityLabel,
    });

    const touchable = component.root.findByProps({ testID: 'category-item' });
    const title = component.root.findByProps({ children: defaultProps.title });
    const image = component.root.findByProps({ accessibilityRole: 'image' });

    expect(touchable.props.accessibilityLabel).toBe(customAccessibilityLabel);
    expect(touchable.props.accessibilityRole).toBe('button');
    expect(title.props.accessibilityRole).toBe('header');
    expect(image.props.accessibilityLabel).toBe(`${defaultProps.title} category image`);
  });

  it('applies correct image properties', () => {
    const component = renderComponent({
      imageFit: 'contain',
    });

    const image = component.root.findByProps({ accessibilityRole: 'image' });
    expect(image.props.contentFit).toBe('contain');
    expect(image.props.transition).toBe(200);
    expect(image.props.cachePolicy).toBe('memory-disk');
  });
});