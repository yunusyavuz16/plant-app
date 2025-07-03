import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from './HomeScreen.styles';

/**
 * Main screen shown after onboarding completion.
 */
const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to PlantApp!</Text>
        <Text style={styles.subtitle}>
          Onboarding completed. This is your home screen.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;