import React, { memo, useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { PLAN_TYPES } from "@/constants/plan";
import { useAppDispatch, useAppSelector } from "@/store";
import { setSelectedPlan } from "@/store/slices/subscriptionSlice";
import styles from "../PaywallScreen.styles";

/**
 * Props for the PlanBox component
 */
interface PlanBoxProps {
  /** Plan type from available plan types */
  plan: keyof typeof PLAN_TYPES;
  /** Title text for the plan */
  title: string;
  /** Description text for the plan */
  desc: string;
  /** Description text when plan is active */
  activeDesc: string;
}

/**
 * Configuration constants for the plan box
 */
const PLAN_BOX_CONFIG = {
  GRADIENT: {
    COLORS: ["rgba(40,175,110,0.24)", "rgba(40,175,110,0.00)"],
    START: { x: 1, y: 0 },
    END: { x: 0, y: 0 },
  },
  ACCESSIBILITY: {
    CONTAINER: (title: string) => `${title} subscription plan option`,
    SAVE_BADGE: "Save 50% with yearly plan",
    RADIO_BUTTON: (isSelected: boolean) =>
      `${isSelected ? "Selected" : "Select"} subscription plan`,
  },
  TOUCH_OPACITY: 0.8,
  SAVE_PERCENTAGE: "50%",
} as const;

/**
 * PlanBox component that displays a subscription plan option
 * with radio button selection, pricing, and save badge for yearly plans.
 *
 * @param props - Component props
 * @returns A React component
 */
const PlanBox: React.FC<PlanBoxProps> = ({ plan, title, desc, activeDesc }) => {
  const selectedPlan = useAppSelector(
    (state) => state.subscription.selectedPlan
  );
  const dispatch = useAppDispatch();

  const handlePress = useCallback(() => {
    dispatch(setSelectedPlan(plan));
  }, []);

  const isSelected = plan === selectedPlan;
  const isYearlyPlan = plan === PLAN_TYPES.YEARLY;

  if (isSelected) {
    return (
      <TouchableOpacity
        style={styles.planBoxContainer}
        onPress={handlePress}
        activeOpacity={PLAN_BOX_CONFIG.TOUCH_OPACITY}
        accessibilityRole="radio"
        accessibilityState={{ checked: true }}
        accessibilityLabel={PLAN_BOX_CONFIG.ACCESSIBILITY.CONTAINER(title)}
        accessibilityHint={PLAN_BOX_CONFIG.ACCESSIBILITY.RADIO_BUTTON(true)}
      >
        <LinearGradient
          colors={PLAN_BOX_CONFIG.GRADIENT.COLORS}
          start={PLAN_BOX_CONFIG.GRADIENT.START}
          end={PLAN_BOX_CONFIG.GRADIENT.END}
          style={[styles.planBox, styles.planBoxActive]}
        >
          {isYearlyPlan && (
            <View
              style={styles.saveBadge}
              accessibilityLabel={PLAN_BOX_CONFIG.ACCESSIBILITY.SAVE_BADGE}
            >
              <Text style={styles.saveBadgeText}>
                Save {PLAN_BOX_CONFIG.SAVE_PERCENTAGE}
              </Text>
            </View>
          )}
          <View style={styles.planRow}>
            <View style={[styles.radio, styles.radioActive]}>
              <View style={styles.radioCircle} />
            </View>
            <View style={styles.planTextBox}>
              <Text style={styles.planTitle}>{title}</Text>
              <Text style={styles.planDescDim}>
                {desc + " "}
                <Text style={styles.planDescDim}>{activeDesc}</Text>
              </Text>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={styles.planBoxContainer}
      onPress={handlePress}
      activeOpacity={PLAN_BOX_CONFIG.TOUCH_OPACITY}
      accessibilityRole="radio"
      accessibilityState={{ checked: false }}
      accessibilityLabel={PLAN_BOX_CONFIG.ACCESSIBILITY.CONTAINER(title)}
      accessibilityHint={PLAN_BOX_CONFIG.ACCESSIBILITY.RADIO_BUTTON(false)}
    >
      <View style={styles.planBox}>
        <View style={styles.planRow}>
          <View style={styles.radio} />
          <View style={styles.planTextBox}>
            <Text style={styles.planTitle}>{title}</Text>
            <Text style={styles.planDesc}>
              {desc}
              <Text style={styles.planDescDim}>auto renewable</Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(PlanBox);
