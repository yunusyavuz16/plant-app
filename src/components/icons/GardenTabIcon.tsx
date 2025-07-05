import React from "react";
import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";
import { TAB_ICON_PATHS } from "@/constants/iconPaths";

interface GardenTabIconProps {
  color: string;
  size?: number;
}

/**
 * Special garden tab icon with clip paths
 */
export const GardenTabIcon: React.FC<GardenTabIconProps> = ({ color, size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 25 25">
    <G clipPath="url(#clip0)">
      <G clipPath="url(#clip1)">
        <Path d={TAB_ICON_PATHS.garden} fill={color} />
      </G>
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Rect width="25" height="25" fill="white" />
      </ClipPath>
      <ClipPath id="clip1">
        <Rect
          width="25"
          height="25"
          fill="white"
          transform="translate(2)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);