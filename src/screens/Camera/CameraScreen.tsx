import { TEXTS } from "@/constants/text";
import React from "react";
import { View, Text } from "react-native";

type Props = {};

const CameraScreen: React.FC<Props> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{TEXTS.COMING_SOON.CAMERA}</Text>
    </View>
  );
};

export default CameraScreen;