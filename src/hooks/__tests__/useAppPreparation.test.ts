import { renderHook, act } from '@testing-library/react-hooks';
import { useAppPreparation } from '../useAppPreparation';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { store } from '@/store';
import * as onboardingSlice from '@/store/slices/onboardingSlice';
import { Platform } from 'react-native';

// Mock font paths
const FONT_PATHS = {
  'Rubik-Regular': require('../../assets/fonts/Rubik-Regular.ttf'),
  'Rubik-ExtraBold': require('../../assets/fonts/Rubik-ExtraBold.ttf'),
  'Rubik-Light': require('../../assets/fonts/Rubik-Light.ttf'),
  'Rubik-Medium': require('../../assets/fonts/Rubik-Medium.ttf'),
  'Rubik-SemiBold': require('../../assets/fonts/Rubik-SemiBold.ttf'),
  'SFProText-Regular': require('../../assets/fonts/SFProText-Regular.ttf'),
  'SFProText-Bold': require('../../assets/fonts/SFProText-Bold.ttf'),
};

// Mock dependencies
jest.mock('expo-font', () => ({
  useFonts: jest.fn(),
}));

jest.mock('expo-splash-screen', () => ({
  preventAutoHideAsync: jest.fn(),
  hideAsync: jest.fn(),
}));

jest.mock('@/store', () => ({
  store: {
    dispatch: jest.fn(),
  },
}));

jest.mock('@/store/slices/onboardingSlice', () => ({
  initializeOnboarding: jest.fn(() => ({ type: 'INITIALIZE_ONBOARDING' })),
}));

// Mock Platform
jest.mock('react-native', () => ({
  Platform: {
    select: jest.fn((obj) => obj.ios || obj.android),
  },
}));

// Mock font files
jest.mock('../../assets/fonts/Rubik-Regular.ttf', () => 'mocked-rubik-regular');
jest.mock('../../assets/fonts/Rubik-ExtraBold.ttf', () => 'mocked-rubik-extrabold');
jest.mock('../../assets/fonts/Rubik-Light.ttf', () => 'mocked-rubik-light');
jest.mock('../../assets/fonts/Rubik-Medium.ttf', () => 'mocked-rubik-medium');
jest.mock('../../assets/fonts/Rubik-SemiBold.ttf', () => 'mocked-rubik-semibold');
jest.mock('../../assets/fonts/SFProText-Regular.ttf', () => 'mocked-sfprotext-regular');
jest.mock('../../assets/fonts/SFProText-Bold.ttf', () => 'mocked-sfprotext-bold');

describe('useAppPreparation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (SplashScreen.preventAutoHideAsync as jest.Mock).mockResolvedValue(undefined);
    (SplashScreen.hideAsync as jest.Mock).mockResolvedValue(undefined);
    (store.dispatch as jest.Mock).mockResolvedValue(undefined);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should initialize with fonts not loaded', async () => {
    (useFonts as jest.Mock).mockReturnValue([false]);

    const { result, waitFor } = renderHook(() => useAppPreparation());

    await waitFor(() => {
      expect(SplashScreen.preventAutoHideAsync).toHaveBeenCalled();
      expect(store.dispatch).toHaveBeenCalledWith(expect.any(Object));
      expect(onboardingSlice.initializeOnboarding).toHaveBeenCalled();
    }, { timeout: 3000 });

    expect(result.current.loaded).toBe(false);
  });

  it('should prevent splash screen from auto-hiding on mount', async () => {
    (useFonts as jest.Mock).mockReturnValue([false]);

    const { waitFor } = renderHook(() => useAppPreparation());

    await waitFor(() => {
      expect(SplashScreen.preventAutoHideAsync).toHaveBeenCalled();
    }, { timeout: 3000 });
  });

  it('should initialize onboarding on mount', async () => {
    (useFonts as jest.Mock).mockReturnValue([false]);

    const { waitFor } = renderHook(() => useAppPreparation());

    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledWith(expect.any(Object));
      expect(onboardingSlice.initializeOnboarding).toHaveBeenCalled();
    }, { timeout: 3000 });
  });

  it('should handle splash screen hide when fonts are loaded', async () => {
    (useFonts as jest.Mock).mockReturnValue([true]);

    const { result } = renderHook(() => useAppPreparation());

    await act(async () => {
      await result.current.onLayoutRootView();
    });

    expect(SplashScreen.hideAsync).toHaveBeenCalled();
  });

  it('should not hide splash screen when fonts are not loaded', async () => {
    (useFonts as jest.Mock).mockReturnValue([false]);

    const { result } = renderHook(() => useAppPreparation());

    await act(async () => {
      await result.current.onLayoutRootView();
    });

    expect(SplashScreen.hideAsync).not.toHaveBeenCalled();
  });

  it('should handle errors during preparation', async () => {
    const mockError = new Error('Failed to prevent auto hide');
    (SplashScreen.preventAutoHideAsync as jest.Mock).mockRejectedValue(mockError);
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

    const { waitFor } = renderHook(() => useAppPreparation());

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(mockError);
    }, { timeout: 3000 });

    consoleSpy.mockRestore();
  });

  it('should load all required fonts', () => {
    (useFonts as jest.Mock).mockReturnValue([true]);

    renderHook(() => useAppPreparation());

    expect(useFonts).toHaveBeenCalledWith({
      Rubik: FONT_PATHS['Rubik-Regular'],
      SFProText: FONT_PATHS['SFProText-Regular'],
      'Rubik-SemiBold': FONT_PATHS['Rubik-SemiBold'],
      'SFProText-Bold': FONT_PATHS['SFProText-Bold'],
      'Rubik-ExtraBold': FONT_PATHS['Rubik-ExtraBold'],
      'Rubik-Medium': FONT_PATHS['Rubik-Medium'],
      'Rubik-Light': FONT_PATHS['Rubik-Light'],
      'Rubik-Regular': FONT_PATHS['Rubik-Regular'],
    });
  });

  it('should handle platform-specific font loading', async () => {
    (Platform.select as jest.Mock).mockImplementation(obj => obj.android);
    (useFonts as jest.Mock).mockReturnValue([true]);

    const { waitFor } = renderHook(() => useAppPreparation());

    await waitFor(() => {
      expect(Platform.select).toHaveBeenCalledWith(expect.objectContaining({
        ios: expect.any(String),
        android: expect.any(String),
      }));
    }, { timeout: 3000 });
  });
});