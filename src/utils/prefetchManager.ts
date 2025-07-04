import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../constants/storage';

export const checkAndSetPrefetchStatus = async (): Promise<boolean> => {
  try {
    const status = await AsyncStorage.getItem(STORAGE_KEYS.PREFETCH_STATUS);

    if (status === null) {
      // First time - need to prefetch
      await AsyncStorage.setItem(STORAGE_KEYS.PREFETCH_STATUS, 'completed');
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