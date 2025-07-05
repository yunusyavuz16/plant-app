import { TEXTS } from "@/constants/text";
import React from "react";
import { ScrollView } from "react-native";
import styles from "../PaywallScreen.styles";
import FeatureCard from "./FeatureCard";
import { UnlimitedIcon } from "@/components/icons/UnlimitedIcon";
import { SpeedIcon } from "@/components/icons/SpeedIcon";

const FEATURE_ICONS = {
  care: require("../../../../assets/paywall/care-icon.png"),
};

/**
 * Container component for feature cards in paywall screen
 */
const FeatureContainer: React.FC = () => {
  return (
    <ScrollView
      horizontal
      style={styles.featuresRow}
      showsHorizontalScrollIndicator={false}
    >
      <FeatureCard
        icon={<UnlimitedIcon width={17} height={17} />}
        title={TEXTS.PAYWALL.FEATURES.UNLIMITED}
        desc={TEXTS.PAYWALL.FEATURES.UNLIMITED_DESC}
      />
      <FeatureCard
        icon={<SpeedIcon width={17} height={17} />}
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
