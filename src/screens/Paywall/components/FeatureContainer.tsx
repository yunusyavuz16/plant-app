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

interface FeatureContainerProps {
  testID?: string;
}

/**
 * Container component for feature cards in paywall screen
 */
const FeatureContainer: React.FC<FeatureContainerProps> = ({ testID }) => {
  return (
    <ScrollView
      horizontal
      style={styles.featuresRow}
      showsHorizontalScrollIndicator={false}
      testID={testID}
    >
      <FeatureCard
        icon={<UnlimitedIcon width={17} height={17} />}
        title={TEXTS.PAYWALL.FEATURES.UNLIMITED}
        desc={TEXTS.PAYWALL.FEATURES.UNLIMITED_DESC}
        testID="feature-card"
      />
      <FeatureCard
        icon={<SpeedIcon width={17} height={17} />}
        title={TEXTS.PAYWALL.FEATURES.FASTER}
        desc={TEXTS.PAYWALL.FEATURES.FASTER_DESC}
        testID="feature-card"
      />
      <FeatureCard
        icon={FEATURE_ICONS.care}
        title={TEXTS.PAYWALL.FEATURES.DETAILED}
        desc={TEXTS.PAYWALL.FEATURES.DETAILED_DESC}
        testID="feature-card"
      />
    </ScrollView>
  );
};

export default FeatureContainer;
