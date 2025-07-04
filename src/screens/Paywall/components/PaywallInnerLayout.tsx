import React, { memo } from "react";
import { Dimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "@/screens/Paywall/PaywallScreen.styles";

/**
 * Props for the PaywallInnerLayout component
 */
interface PaywallInnerLayoutProps {
  /** Child components to render inside the layout */
  children: React.ReactNode;
}

/**
 * Configuration constants for the inner layout
 */
const INNER_LAYOUT_CONFIG = {
  CONTENT_HEIGHT: 612,
  ACCESSIBILITY: {
    CONTAINER: "Paywall content container",
  },
} as const;

/**
 * PaywallInnerLayout component that provides the inner content layout
 * for the paywall screen, handling content positioning and safe area insets.
 *
 * @param props - Component props
 * @returns A React component
 */
const PaywallInnerLayout: React.FC<PaywallInnerLayoutProps> = ({ children }) => {
  const insets = useSafeAreaInsets();
  const { height: SCREEN_HEIGHT } = Dimensions.get("window");

  const marginTop = SCREEN_HEIGHT - INNER_LAYOUT_CONFIG.CONTENT_HEIGHT - insets.bottom - insets.top;

  return (
    <View
      style={[styles.content, { marginTop }]}
      accessibilityRole="none"
      accessibilityLabel={INNER_LAYOUT_CONFIG.ACCESSIBILITY.CONTAINER}
    >
      {children}
    </View>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(PaywallInnerLayout);
