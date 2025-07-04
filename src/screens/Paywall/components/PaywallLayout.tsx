import React, { memo } from "react";
import { Dimensions, ImageBackground, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./../PaywallScreen.styles";

/**
 * Props for the PaywallLayout component
 */
interface PaywallLayoutProps {
  /** Child components to render inside the layout */
  children: React.ReactNode;
}

/**
 * Configuration constants for the paywall layout
 */
const LAYOUT_CONFIG = {
  IMAGE: {
    SOURCE: require("../../../../assets/paywall/paywall-top.png"),
    HEIGHT_RATIO: 0.58,
  },
  ACCESSIBILITY: {
    CONTAINER: "Paywall screen container",
    BACKGROUND: "Paywall background image",
  },
} as const;

/**
 * PaywallLayout component that provides the base layout structure
 * for the paywall screen, including background image and safe area handling.
 *
 * @param props - Component props
 * @returns A React component
 */
const PaywallLayout: React.FC<PaywallLayoutProps> = ({ children }) => {
  const insets = useSafeAreaInsets();
  const { height: SCREEN_HEIGHT } = Dimensions.get("window");

  return (
    <View
      style={[
        styles.root,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
      accessibilityRole="none"
      accessibilityLabel={LAYOUT_CONFIG.ACCESSIBILITY.CONTAINER}
    >
      <ImageBackground
        source={LAYOUT_CONFIG.IMAGE.SOURCE}
        style={[styles.topImage, { height: SCREEN_HEIGHT * LAYOUT_CONFIG.IMAGE.HEIGHT_RATIO }]}
        resizeMode="cover"
        accessibilityRole="image"
        accessibilityLabel={LAYOUT_CONFIG.ACCESSIBILITY.BACKGROUND}
      />
      {children}
    </View>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(PaywallLayout);
