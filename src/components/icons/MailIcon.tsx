import React, { memo } from "react";
import {
  Defs,
  FeBlend,
  FeColorMatrix,
  FeComposite,
  FeFlood,
  FeGaussianBlur,
  FeOffset,
  Filter,
  G,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";
import BaseIcon, { BaseIconProps } from './BaseIcon';

/**
 * Configuration constants for the mail icon
 */
const MAIL_ICON_CONFIG = {
  ASPECT_RATIO: 45 / 52,
  VIEW_BOX: "0 0 52 45",
  GRADIENT: {
    FIRST: {
      ID: "paint0_linear",
      START: { x: "26", y: "14.4616" },
      END: { x: "41.8085", y: "37.5515" },
    },
    SECOND: {
      ID: "paint1_linear",
      START: { x: "26", y: "7.7656" },
      END: { x: "38.3343", y: "29.1859" },
    },
  },
  FILTER: {
    ID: "filter0_d",
    DIMENSIONS: {
      x: "0",
      y: "0.765594",
      width: "52",
      height: "43.9667",
    },
    BLUR: 5,
    OFFSET: 3,
  },
  COLORS: {
    START: "#F0D399",
    END: "#D9A846",
  },
} as const;

/**
 * Props for the MailIcon component
 * Extends BaseIconProps to inherit all base icon functionality
 */
type MailIconProps = Omit<BaseIconProps, 'viewBox'>;

/**
 * MailIcon component that renders a mail icon with gradient and shadow effects
 * Features:
 * - Gradient fill
 * - Drop shadow
 * - Aspect ratio preservation
 * - Accessibility support
 */
const MailIcon: React.FC<MailIconProps> = ({
  size = 52,
  accessibilityLabel = "Mail",
  ...props
}) => {
  return (
    <BaseIcon
      size={size}
      height={size * MAIL_ICON_CONFIG.ASPECT_RATIO}
      viewBox={MAIL_ICON_CONFIG.VIEW_BOX}
      accessibilityLabel={accessibilityLabel}
      {...props}
    >
      <Defs>
        <LinearGradient
          id={MAIL_ICON_CONFIG.GRADIENT.FIRST.ID}
          x1={MAIL_ICON_CONFIG.GRADIENT.FIRST.START.x}
          y1={MAIL_ICON_CONFIG.GRADIENT.FIRST.START.y}
          x2={MAIL_ICON_CONFIG.GRADIENT.FIRST.END.x}
          y2={MAIL_ICON_CONFIG.GRADIENT.FIRST.END.y}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={MAIL_ICON_CONFIG.COLORS.START} />
          <Stop offset="1" stopColor={MAIL_ICON_CONFIG.COLORS.END} />
        </LinearGradient>
        <LinearGradient
          id={MAIL_ICON_CONFIG.GRADIENT.SECOND.ID}
          x1={MAIL_ICON_CONFIG.GRADIENT.SECOND.START.x}
          y1={MAIL_ICON_CONFIG.GRADIENT.SECOND.START.y}
          x2={MAIL_ICON_CONFIG.GRADIENT.SECOND.END.x}
          y2={MAIL_ICON_CONFIG.GRADIENT.SECOND.END.y}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={MAIL_ICON_CONFIG.COLORS.START} />
          <Stop offset="1" stopColor={MAIL_ICON_CONFIG.COLORS.END} />
        </LinearGradient>
        <Filter
          id={MAIL_ICON_CONFIG.FILTER.ID}
          x={MAIL_ICON_CONFIG.FILTER.DIMENSIONS.x}
          y={MAIL_ICON_CONFIG.FILTER.DIMENSIONS.y}
          width={MAIL_ICON_CONFIG.FILTER.DIMENSIONS.width}
          height={MAIL_ICON_CONFIG.FILTER.DIMENSIONS.height}
          filterUnits="userSpaceOnUse"
        >
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <FeOffset dy={MAIL_ICON_CONFIG.FILTER.OFFSET} />
          <FeGaussianBlur stdDeviation={MAIL_ICON_CONFIG.FILTER.BLUR} />
          <FeComposite in2="hardAlpha" operator="out" />
          <FeColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
          />
          <FeBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </Filter>
      </Defs>
      <G filter={`url(#${MAIL_ICON_CONFIG.FILTER.ID})`}>
        <Path
          d="M28.6743 23.3548C27.8782 23.8855 26.9534 24.1661 26 24.1661C25.0466 24.1661 24.1219 23.8855 23.3258 23.3548L10.2131 14.6127C10.1403 14.5642 10.0694 14.5137 10 14.4617V28.7865C10 30.4288 11.3328 31.7323 12.9458 31.7323H39.0541C40.6965 31.7323 41.9999 30.3995 41.9999 28.7865V14.4616C41.9304 14.5137 41.8594 14.5644 41.7864 14.613L28.6743 23.3548Z"
          fill={`url(#${MAIL_ICON_CONFIG.GRADIENT.FIRST.ID})`}
        />
        <Path
          d="M11.2531 13.0526L24.3658 21.7947C24.8622 22.1257 25.4311 22.2911 25.9999 22.2911C26.5689 22.2911 27.1378 22.1256 27.6342 21.7947L40.7469 13.0526C41.5316 12.5298 42 11.6548 42 10.7104C42 9.08659 40.6789 7.76559 39.0552 7.76559H12.9448C11.3211 7.76566 10 9.08666 10 10.712C10 11.6548 10.4685 12.5298 11.2531 13.0526V13.0526Z"
          fill={`url(#${MAIL_ICON_CONFIG.GRADIENT.SECOND.ID})`}
        />
      </G>
    </BaseIcon>
  );
};

// Display name for debugging purposes
MailIcon.displayName = 'MailIcon';

// Memoize the component to prevent unnecessary re-renders
export default memo(MailIcon);
