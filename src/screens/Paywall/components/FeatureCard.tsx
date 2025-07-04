import React from "react";
import { Image, Text, View } from "react-native";
import styles from "../PaywallScreen.styles";

// Feature card icons


const FeatureCard = ({
  icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) => {
  return (
    <View style={styles.featureCard}>
      <Image
        source={icon}
        style={styles.featureIconImage}
        resizeMode="contain"
      />
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDesc}>{desc}</Text>
    </View>
  );
};
export default FeatureCard;
