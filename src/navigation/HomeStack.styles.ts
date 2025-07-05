import { colors, typography } from "@/constants/theme";
import { StyleSheet } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.white,
  },
});

export const screenOptions = {
  headerShown: false,
  tabBarStyle: {
    backgroundColor: colors.background.white + "92",
    paddingBottom: 0,
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
    height: 49,
  },
  tabBarActiveTintColor: colors.primary.green,
  tabBarInactiveTintColor: colors.primary.inactive,
  tabBarLabelStyle: {
    fontSize: typography.size.sm,
    fontFamily: typography.fonts.RubikRegular,
  },
};

export const getContainerStyle = (insets: EdgeInsets) => {
  return {
    flex: 1,
    paddingBottom: insets.bottom,
    backgroundColor: "white",
  };
};
