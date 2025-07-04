import React, { memo } from "react";
import { View } from "react-native";
import { PLAN_TYPES } from "@/constants/plan";
import { TEXTS } from "@/constants/text";
import styles from "../PaywallScreen.styles";
import PlanBox from "./PlanBox";

/**
 * Configuration constants for the plan box container
 */
const PLAN_CONTAINER_CONFIG = {
  ACCESSIBILITY: {
    CONTAINER: "Subscription plans container",
  },
  PLANS: [
    {
      type: PLAN_TYPES.MONTHLY as keyof typeof PLAN_TYPES,
      title: TEXTS.PAYWALL.PLANS.MONTHLY.TITLE,
      desc: TEXTS.PAYWALL.PLANS.MONTHLY.PRICE,
      activeDesc: TEXTS.PAYWALL.PLANS.MONTHLY.RENEWAL,
    },
    {
      type: PLAN_TYPES.YEARLY as keyof typeof PLAN_TYPES,
      title: TEXTS.PAYWALL.PLANS.YEARLY.TITLE,
      desc: TEXTS.PAYWALL.PLANS.YEARLY.TRIAL,
      activeDesc: TEXTS.PAYWALL.PLANS.YEARLY.PRICE,
    },
  ] as const,
} as const;

/**
 * PlanBoxContainer component that displays available subscription plans
 * using PlanBox components in a vertical layout.
 *
 * @returns A React component
 */
const PlanBoxContainer: React.FC = () => {
  return (
    <View
      style={styles.planBoxesContainer}
      accessibilityRole="radiogroup"
      accessibilityLabel={PLAN_CONTAINER_CONFIG.ACCESSIBILITY.CONTAINER}
    >
      {PLAN_CONTAINER_CONFIG.PLANS.map((plan) => (
        <PlanBox
          key={plan.type}
          plan={plan.type}
          title={plan.title}
          desc={plan.desc}
          activeDesc={plan.activeDesc}
        />
      ))}
    </View>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(PlanBoxContainer);
