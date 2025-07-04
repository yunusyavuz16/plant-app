import React from "react";
import { Dimensions, ImageBackground, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./../PaywallScreen.styles";

const PaywallLayout = ({ children }: { children: React.ReactNode }) => {
  const insets = useSafeAreaInsets();
  const { height: SCREEN_HEIGHT } = Dimensions.get("window");

  return (
    <View
      style={[
        styles.root,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <ImageBackground
        source={require("../../../../assets/paywall/paywall-top.png")}
        style={[styles.topImage, { height: SCREEN_HEIGHT * 0.58 }]}
        resizeMode="cover"
      />
      {children}
    </View>
  );
};

export default PaywallLayout;
