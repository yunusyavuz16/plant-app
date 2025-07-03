import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { OnboardingStackParamList } from '../../navigation/OnboardingStack';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import styles from './BenefitsScreen.styles';

/**
 * Third screen in the onboarding flow showing app benefits.
 */
const BenefitsScreen: React.FC<
  NativeStackScreenProps<OnboardingStackParamList, 'Benefits'>
> = ({ navigation }) => {
  /**
   * Navigate to the next onboarding step.
   */
  const handleNext = () => {
    navigation.navigate('Paywall');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Benefits Screen</Text>
        <Text style={styles.subtitle}>This is a placeholder for the Benefits screen</Text>
      </View>
      <View style={styles.bottom}>
        <PrimaryButton label="Continue" onPress={handleNext} />
      </View>
    </SafeAreaView>
  );
};

export default BenefitsScreen;