import React from "react";
import { Image, Text, View, ImageSourcePropType } from "react-native";
import styles from "../PaywallScreen.styles";

interface FeatureCardProps {
  icon: ImageSourcePropType | React.ReactElement;
  title: string;
  desc: string;
  testID?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, desc, testID }) => {
  return (
    <View style={styles.featureCard} testID={testID}>
      {React.isValidElement(icon) ? (
        <View style={styles.featureIconImageSvg} testID="feature-icon-svg">
          {icon}
        </View>
      ) : (
        <Image
          source={icon as ImageSourcePropType}
          style={styles.featureIconImage}
          resizeMode="contain"
          testID="feature-icon-image"
        />
      )}
      <Text style={styles.featureTitle} testID="feature-title">{title}</Text>
      <Text style={styles.featureDesc} testID="feature-desc">{desc}</Text>
    </View>
  );
};

export default FeatureCard;
