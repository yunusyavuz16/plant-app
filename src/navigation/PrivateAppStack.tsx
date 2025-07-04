import SearchScreen from "@/screens/Search/SearchScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeStack from "./HomeStack";

export type PrivateAppStackParamList = {
  HomeAppStack: undefined;
  Search: undefined;
};

const Stack = createNativeStackNavigator<PrivateAppStackParamList>();

const PrivateAppStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeAppStack" component={HomeStack} />
    <Stack.Screen name="Search" component={SearchScreen} />
  </Stack.Navigator>
);

export default PrivateAppStack;
