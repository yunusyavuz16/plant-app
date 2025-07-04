import React, { memo } from 'react';
import { Path } from 'react-native-svg';
import BaseIcon, { BaseIconProps } from './BaseIcon';

/**
 * Props for the ChevronRightIcon component
 * Extends BaseIconProps to inherit all base icon functionality
 */
type ChevronRightIconProps = BaseIconProps;

/**
 * ChevronRightIcon component that renders a right-pointing chevron
 * using the BaseIcon component for consistent styling and behavior
 */
const ChevronRightIcon: React.FC<ChevronRightIconProps> = ({
  accessibilityLabel = "Right chevron",
  ...props
}) => {
  return (
    <BaseIcon accessibilityLabel={accessibilityLabel} {...props}>
      <Path
        d="M9 18L15 12L9 6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};

// Display name for debugging purposes
ChevronRightIcon.displayName = 'ChevronRightIcon';

// Memoize the component to prevent unnecessary re-renders
export default memo(ChevronRightIcon);