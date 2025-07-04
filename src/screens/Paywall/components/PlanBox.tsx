import { setSelectedPlan } from "@/store/slices/subscriptionSlice";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { PLAN_TYPES } from "../../../constants/plan";
import { useAppDispatch, useAppSelector } from "../../../store";
import styles from "../PaywallScreen.styles";

const PlanBox = ({
  plan,
  title,
  desc,
  activeDesc,
}: {
  plan: keyof typeof PLAN_TYPES;
  title: string;
  desc: string;
  activeDesc: string;
}) => {
  const selectedPlan = useAppSelector(
    (state) => state.subscription.selectedPlan
  );
  const dispatch = useAppDispatch();
  if (plan === selectedPlan) {
    return (
      <TouchableOpacity
        style={styles.planBoxContainer}
        onPress={() => dispatch(setSelectedPlan(plan))}
        activeOpacity={0.8}
      >
        <LinearGradient
          // exact stops from Figma: #28AF6E @24% → #28AF6E @0%
          colors={["rgba(40,175,110,0.24)", "rgba(40,175,110,0.00)"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={[styles.planBox, styles.planBoxActive]}
        >
          {plan === PLAN_TYPES.YEARLY && (
            <View style={styles.saveBadge}>
              <Text style={styles.saveBadgeText}>Save 50%</Text>
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
      onPress={() => dispatch(setSelectedPlan(plan))}
      activeOpacity={0.8}
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

export default PlanBox;
