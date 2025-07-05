import React from "react";
import Svg, { Path } from "react-native-svg";
import { TAB_ICON_PATHS, TabIconName } from "@/constants/iconPaths";
import { CameraTabIcon } from "./CameraTabIcon";
import { GardenTabIcon } from "./GardenTabIcon";

interface TabIconProps {
  name: TabIconName;
  color: string;
  size?: number;
}

/**
 * Tab bar icon component that renders different icons based on the tab name.
 * Includes special handling for camera and garden icons.
 *
 * @param name - The name of the icon to display
 * @param color - The color to fill the icon with
 * @param size - The size of the icon (default: 24)
 */
const TabIcon: React.FC<TabIconProps> = ({ name, color, size = 24 }) => {
  // Special case for camera tab which has a different background
  if (name === "camera") {
    return <CameraTabIcon size={size} />;
  }

  // Special case for garden tab which needs a clip path
  if (name === "garden") {
    return <GardenTabIcon color={color} size={size} />;
  }

  // Default case for simple SVG icons
  return (
    <Svg width={size} height={size} viewBox="0 0 25 25">
      <Path d={TAB_ICON_PATHS[name]} fill={color} />
    </Svg>
  );
};

export default TabIcon;