import { TEXTS } from "@/constants/text";
import React from "react";
import { ScrollView } from "react-native";
import styles from "../PaywallScreen.styles";
import FeatureCard from "./FeatureCard";

const FEATURE_ICONS = {
  scan: require("../../../../assets/paywall/unlimited-icon.png"),
  speed: require("../../../../assets/paywall/speed-icon.png"),
  care: require("../../../../assets/paywall/care-icon.png"),
};

const FeatureContainer = () => {
  return (
    <ScrollView
      horizontal
      style={styles.featuresRow}
      showsHorizontalScrollIndicator={false}
    >
      <FeatureCard
        icon={FEATURE_ICONS.scan}
        title={TEXTS.PAYWALL.FEATURES.UNLIMITED}
        desc={TEXTS.PAYWALL.FEATURES.UNLIMITED_DESC}
      />
      <FeatureCard
        icon={FEATURE_ICONS.speed}
        title={TEXTS.PAYWALL.FEATURES.FASTER}
        desc={TEXTS.PAYWALL.FEATURES.FASTER_DESC}
      />
      <FeatureCard
        icon={FEATURE_ICONS.care}
        title={TEXTS.PAYWALL.FEATURES.DETAILED}
        desc={TEXTS.PAYWALL.FEATURES.DETAILED_DESC}
      />
    </ScrollView>
  );
};

export default FeatureContainer;
