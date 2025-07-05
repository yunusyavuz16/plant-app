import React from "react";
import { Image, Text, View, ImageSourcePropType } from "react-native";
import styles from "../PaywallScreen.styles";

interface FeatureCardProps {
  icon: ImageSourcePropType | React.ReactElement;
  title: string;
  desc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, desc }) => {
  return (
    <View style={styles.featureCard}>
      {React.isValidElement(icon) ? (
        <View style={styles.featureIconImageSvg}>
          {icon}
        </View>
      ) : (
        <Image
          source={icon as ImageSourcePropType}
          style={styles.featureIconImage}
          resizeMode="contain"
        />
      )}
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDesc}>{desc}</Text>
    </View>
  );
};

export default FeatureCard;
