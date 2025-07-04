import { PLAN_TYPES } from "@/constants/plan";
import { TEXTS } from "@/constants/text";
import React from "react";
import { View } from "react-native";
import styles from "../PaywallScreen.styles";
import PlanBox from "./PlanBox";

const PlanBoxContainer = () => {
  return (
    <View style={styles.planBoxesContainer}>
      <PlanBox
        plan={PLAN_TYPES.MONTHLY as keyof typeof PLAN_TYPES}
        title={TEXTS.PAYWALL.PLANS.MONTHLY.TITLE}
        desc={TEXTS.PAYWALL.PLANS.MONTHLY.PRICE}
        activeDesc={TEXTS.PAYWALL.PLANS.MONTHLY.RENEWAL}
      />
      <PlanBox
        plan={PLAN_TYPES.YEARLY as keyof typeof PLAN_TYPES}
        title={TEXTS.PAYWALL.PLANS.YEARLY.TITLE}
        desc={TEXTS.PAYWALL.PLANS.YEARLY.TRIAL}
        activeDesc={TEXTS.PAYWALL.PLANS.YEARLY.PRICE}
      />
    </View>
  );
};

export default PlanBoxContainer;
