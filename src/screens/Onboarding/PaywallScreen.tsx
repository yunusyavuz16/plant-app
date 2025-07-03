import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { OnboardingStackParamList } from '../../navigation/OnboardingStack';
import { useOnboarding } from '../../context/OnboardingContext';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import styles from './PaywallScreen.styles';

/**
 * Final screen in the onboarding flow with paywall.
 * Completing this screen marks onboarding as done.
 */
const PaywallScreen: React.FC<
  NativeStackScreenProps<OnboardingStackParamList, 'Paywall'>
> = () => {
  const { completeOnboarding } = useOnboarding();

  /**
   * Complete onboarding when user closes paywall.
   */
  const handleClose = () => {
    completeOnboarding();
  };

  /**
   * Handle subscription purchase (placeholder).
   */
  const handleSubscribe = () => {
    // TODO: Implement subscription logic
    completeOnboarding();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
          <Text style={styles.closeText}>×</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Paywall Screen</Text>
        <Text style={styles.subtitle}>This is a placeholder for the Paywall screen</Text>
      </View>

      <View style={styles.bottom}>
        <PrimaryButton label="Subscribe" onPress={handleSubscribe} />
        <TouchableOpacity onPress={handleClose} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip for now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PaywallScreen;