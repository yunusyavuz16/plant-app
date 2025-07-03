import React, { createContext, useContext, useState, useEffect, FC } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface OnboardingContextValue {
  completed: boolean;
  completeOnboarding: () => void;
}

const STORAGE_KEY = 'onboarding_completed';

const OnboardingContext = createContext<OnboardingContextValue | undefined>(
  undefined,
);

/**
 * Provide onboarding completion flag to the app.
 */
export const OnboardingProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    (async () => {
      const flag = await AsyncStorage.getItem(STORAGE_KEY);
      setCompleted(flag === 'true');
    })();
  }, []);

  const completeOnboarding = async () => {
    await AsyncStorage.setItem(STORAGE_KEY, 'true');
    setCompleted(true);
  };

  return (
    <OnboardingContext.Provider value={{ completed, completeOnboarding }}>
      {children}
    </OnboardingContext.Provider>
  );
};

/**
 * Access onboarding context value.
 */
export const useOnboarding = (): OnboardingContextValue => {
  const ctx = useContext(OnboardingContext);
  if (!ctx) {
    throw new Error('useOnboarding must be used within OnboardingProvider');
  }
  return ctx;
};