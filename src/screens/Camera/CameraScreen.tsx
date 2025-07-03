import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigation/HomeStack';

type Props = NativeStackScreenProps<HomeStackParamList, 'Camera'>;

const CameraScreen: React.FC<Props> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Camera Screen (Coming Soon)</Text>
    </View>
  );
};

export default CameraScreen;