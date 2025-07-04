import React, { memo } from 'react';
import { ViewStyle } from 'react-native';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { colors } from '@/constants/theme';

/**
 * Configuration constants for icons
 */
export const ICON_CONFIG = {
  DEFAULT: {
    SIZE: 24,
    COLOR: colors.text.primary,
    VIEW_BOX: '0 0 24 24',
  },
} as const;

/**
 * Props for the BaseIcon component
 */
export interface BaseIconProps extends Omit<SvgProps, 'width' | 'height'> {
  /** Optional color of the icon */
  color?: string;
  /** Optional size of the icon (width) */
  size?: number;
  /** Optional height of the icon (defaults to size) */
  height?: number;
  /** Optional style overrides */
  style?: ViewStyle;
  /** Optional accessibility label */
  accessibilityLabel?: string;
}

/**
 * Base icon component that provides common functionality for all icons:
 * 1. Consistent sizing and coloring
 * 2. Accessibility support
 * 3. Style customization
 *
 * Features:
 * - TypeScript support
 * - Memoization
 * - Accessibility
 * - Style overrides
 */
const BaseIcon: React.FC<BaseIconProps> = ({
  color = ICON_CONFIG.DEFAULT.COLOR,
  size = ICON_CONFIG.DEFAULT.SIZE,
  height = size,
  style,
  accessibilityLabel,
  children,
  ...props
}) => {
  return (
    <Svg
      width={size}
      height={height}
      viewBox={ICON_CONFIG.DEFAULT.VIEW_BOX}
      fill="none"
      style={style}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="image"
      {...props}
    >
      {React.Children.map(children, child => {
        if (React.isValidElement<{ stroke?: string }>(child) && child.type === Path) {
          return React.cloneElement(child, {
            ...child.props,
            stroke: child.props.stroke || color,
          });
        }
        return child;
      })}
    </Svg>
  );
};

// Display name for debugging purposes
BaseIcon.displayName = 'BaseIcon';

// Memoize the component to prevent unnecessary re-renders
export default memo(BaseIcon);