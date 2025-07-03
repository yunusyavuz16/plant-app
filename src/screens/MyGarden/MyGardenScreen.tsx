import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigation/HomeStack';

type Props = NativeStackScreenProps<HomeStackParamList, 'MyGarden'>;

const MyGardenScreen: React.FC<Props> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My Garden Screen (Coming Soon)</Text>
    </View>
  );
};

export default MyGardenScreen;