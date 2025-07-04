import { colors } from "@/constants/theme";
import HomeHeader from "@/screens/Home/components/HomeHeader";
import { HomeShimmer } from "@/screens/Home/components/HomeShimmer";
import TabIcon from "@components/icons/TabIcon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CameraScreen from "@screens/Camera/CameraScreen";
import DiagnoseScreen from "@screens/Diagnose/DiagnoseScreen";
import HomeScreen from "@screens/Home/HomeScreen";
import MyGardenScreen from "@screens/MyGarden/MyGardenScreen";
import ProfileScreen from "@screens/Profile/ProfileScreen";
import { useHomeIndex } from "hooks/useHomeIndex";
import React from "react";
import {
  useSafeAreaInsets
} from "react-native-safe-area-context";

export type HomeStackParamList = {
  HomeScreen: undefined;
  Diagnose: undefined;
  Camera: undefined;
  MyGarden: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<HomeStackParamList>();

/**
 * Main navigation stack shown after onboarding completion
 */
const HomeStack: React.FC = () => {
  const { categories, questions, loading } = useHomeIndex();

  const insets = useSafeAreaInsets();

  if (loading && categories.length === 0 && questions.length === 0) {
    return <HomeShimmer />;
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background.white + "92",
          paddingBottom: 0,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 49 + insets.bottom,
          bottom: 0,
        },
        tabBarActiveTintColor: "#28AF6E",
        tabBarInactiveTintColor: "#979798",
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "500",
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: true,
          header: () => <HomeHeader />,

          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => <TabIcon name="home" color={color} />,
        }}
      />
      <Tab.Screen
        name="Diagnose"
        component={DiagnoseScreen}
        options={{
          tabBarLabel: "Diagnose",
          tabBarIcon: ({ color }) => <TabIcon name="diagnose" color={color} />,
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => <TabIcon name="camera" color="white" size={64} />,
        }}
      />
      <Tab.Screen
        name="MyGarden"
        component={MyGardenScreen}
        options={{
          tabBarLabel: "My Garden",
          tabBarIcon: ({ color }) => <TabIcon name="garden" color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => <TabIcon name="profile" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeStack;
