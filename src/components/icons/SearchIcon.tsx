import React, { memo } from 'react';
import { Path } from 'react-native-svg';
import BaseIcon, { BaseIconProps } from './BaseIcon';
import { colors } from '@/constants/theme';

/**
 * Configuration constants for the search icon
 */
const SEARCH_ICON_CONFIG = {
  DEFAULT: {
    COLOR: colors.text.secondary,
    SIZE: 16,
    VIEW_BOX: '0 0 16 16',
  },
  STROKE: {
    WIDTH: 1.5,
  },
} as const;

/**
 * Props for the SearchIcon component
 * Extends BaseIconProps to inherit all base icon functionality
 */
type SearchIconProps = Omit<BaseIconProps, 'viewBox'>;

/**
 * SearchIcon component that renders a search/magnifying glass icon
 * Features:
 * - Customizable color and size
 * - Accessibility support
 * - Consistent stroke width
 */
const SearchIcon: React.FC<SearchIconProps> = ({
  color = SEARCH_ICON_CONFIG.DEFAULT.COLOR,
  size = SEARCH_ICON_CONFIG.DEFAULT.SIZE,
  accessibilityLabel = "Search",
  ...props
}) => {
  return (
    <BaseIcon
      size={size}
      color={color}
      viewBox={SEARCH_ICON_CONFIG.DEFAULT.VIEW_BOX}
      accessibilityLabel={accessibilityLabel}
      {...props}
    >
      <Path
        d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
        strokeWidth={SEARCH_ICON_CONFIG.STROKE.WIDTH}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 14L11 11"
        strokeWidth={SEARCH_ICON_CONFIG.STROKE.WIDTH}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};

// Display name for debugging purposes
SearchIcon.displayName = 'SearchIcon';

// Memoize the component to prevent unnecessary re-renders
export default memo(SearchIcon);