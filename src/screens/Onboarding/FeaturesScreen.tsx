import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { OnboardingStackParamList } from '../../navigation/OnboardingStack';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import styles from './FeaturesScreen.styles';

/**
 * Second screen in the onboarding flow showing app features.
 */
const FeaturesScreen: React.FC<
  NativeStackScreenProps<OnboardingStackParamList, 'Features'>
> = ({ navigation }) => {
  /**
   * Navigate to the next onboarding step.
   */
  const handleNext = () => {
    navigation.navigate('Benefits');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Features Screen</Text>
        <Text style={styles.subtitle}>This is a placeholder for the Features screen</Text>
      </View>
      <View style={styles.bottom}>
        <PrimaryButton label="Continue" onPress={handleNext} />
      </View>
    </SafeAreaView>
  );
};

export default FeaturesScreen;