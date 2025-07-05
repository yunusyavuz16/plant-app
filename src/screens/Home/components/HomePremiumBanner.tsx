import { SvgGradientText } from "@/components/GradientText/GradientText";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon";
import MailIcon from "@/components/icons/MailIcon";
import { TEXTS } from "@/constants/text";
import { colors } from "@/constants/theme";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../HomeScreen.styles";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HomePremiumBanner = () => {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    navigation.navigate('Paywall');
  };

  return (
    <TouchableOpacity
      style={styles.premiumBanner}
      testID="premium-banner"
      onPress={handlePress}
    >
      <View style={styles.premiumIconContainer}>
        <MailIcon />
        <View style={styles.notificationBadge} testID="notification-badge">
          <Text style={styles.notificationText}>1</Text>
        </View>
      </View>
      <View style={styles.premiumTextContainer}>
        <SvgGradientText
          text={
            TEXTS.HOME.PREMIUM_BANNER.TITLE_BOLD +
            " " +
            TEXTS.HOME.PREMIUM_BANNER.TITLE_REGULAR
          }
          width={200}
          height={21}
          fontSize={16}
          fontWeight="700"
          colors={[colors.text.extraLightGold, colors.text.boldGold]}
          style={styles.premiumTitle}
        />
        <SvgGradientText
          text={TEXTS.HOME.PREMIUM_BANNER.SUBTITLE}
          width={200}
          height={16}
          fontSize={13}
          fontWeight="700"
          colors={[colors.text.lightYellow, colors.text.lightGold]}
          style={styles.premiumSubtitle}
        />
      </View>
      <ChevronRightIcon />
    </TouchableOpacity>
  );
};

export default HomePremiumBanner;
