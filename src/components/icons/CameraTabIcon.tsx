import { TAB_ICON_PATHS } from "@/constants/iconPaths";
import { colors } from "@/constants/theme";
import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface CameraTabIconProps {
  size?: number;
}

/**
 * Special camera tab icon with a circular background
 */
export const CameraTabIcon: React.FC<CameraTabIconProps> = ({ size = 24 }) => {
  const style = getStyle(size);
  return (
    <View style={style.container}>
      <View style={style.innerContainer}>
        <Svg width={25} height={25} viewBox="0 0 25 25">
          <Path d={TAB_ICON_PATHS.camera} fill="white" />
        </Svg>
      </View>
    </View>
  );
};

const getStyle = (size: number) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background.lightGreen2,
      width: size,
      height: size,
      borderRadius: size / 2,
      justifyContent: "center",
      alignItems: "center",
      marginTop: -size / 2,
    },
    innerContainer: {
      width: size - 8,
      height: size - 8,
      borderRadius: size / 2,
      backgroundColor: colors.primary.green,
      justifyContent: "center",
      alignItems: "center",
    },
  });
