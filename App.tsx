import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import { OnboardingProvider } from './src/context/OnboardingContext';

/**
 * Root component registered by Expo.
 */
const App: React.FC = () => (
  <OnboardingProvider>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  </OnboardingProvider>
);

export default App;