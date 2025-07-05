import styles from "@/screens/Paywall/PaywallScreen.styles";
import React from "react";
import { Dimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CONST_HEIGHT_CONTENT = 612;

const PaywallInnerLayout = ({ children }: { children: React.ReactNode }) => {
  const insets = useSafeAreaInsets();
  const { height: SCREEN_HEIGHT } = Dimensions.get("window");
  return (
    <View
      testID="paywall-inner-layout"
      style={[
        styles.content,
        {
          marginTop:
            SCREEN_HEIGHT - CONST_HEIGHT_CONTENT - insets.bottom - insets.top,
        },
      ]}
    >
      {children}
    </View>
  );
};

export default PaywallInnerLayout;
