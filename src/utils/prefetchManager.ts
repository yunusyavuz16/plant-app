import AsyncStorage from '@react-native-async-storage/async-storage';

const PREFETCH_KEY = '@plant_app_prefetch_status';

export const checkAndSetPrefetchStatus = async (): Promise<boolean> => {
  try {
    const status = await AsyncStorage.getItem(PREFETCH_KEY);

    if (status === null) {
      // First time - need to prefetch
      await AsyncStorage.setItem(PREFETCH_KEY, 'completed');
      return true;
    }

    // Already prefetched before
    return false;
  } catch (error) {
    // If there's an error reading/writing AsyncStorage,
    // we'll prefetch to be safe
    console.warn('Error checking prefetch status:', error);
    return true;
  }
};