import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@/store';
import { setIsSearching, setSearchQuery } from '@/store/slices/searchSlice';

// Mock text constants first
jest.mock('@/constants/text', () => ({
  TEXTS: {
    HOME: {
      WELCOME: 'Welcome to',
      SEARCH_PLACEHOLDER: 'Search plants, diseases...',
      GREETING: {
        MORNING: 'Good morning',
        AFTERNOON: 'Good afternoon',
        EVENING: 'Good evening',
      },
    },
  },
}));

// Mock navigation
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

// Mock Redux
jest.mock('@/store', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

// Mock search slice actions
jest.mock('@/store/slices/searchSlice', () => ({
  setIsSearching: jest.fn(),
  setSearchQuery: jest.fn(),
}));

// Mock safe area context
jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
}));

// Mock icons
jest.mock('@/components/icons/SearchIcon', () => () => null);

// Mock styles
jest.mock('../../HomeScreen.styles', () => ({
  header: {},
  welcomeText: {},
  greetingText: {},
  searchContainer: {},
  searchInputContainer: {},
  searchInput: {},
}));

// Import HomeHeader after all mocks
import HomeHeader from '../HomeHeader';

describe('HomeHeader', () => {
  const mockNavigation = {
    navigate: jest.fn(),
  };
  const mockDispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useNavigation as jest.Mock).mockReturnValue(mockNavigation);
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useAppSelector as jest.Mock).mockReturnValue({ query: '' });

    // Mock Date to return a fixed time
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(14); // 2 PM
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<HomeHeader />);

    expect(getByText('Welcome to')).toBeTruthy();
    expect(getByText('Good afternoon ⛅')).toBeTruthy();
    expect(getByPlaceholderText('Search plants, diseases...')).toBeTruthy();
  });

  it('handles search focus correctly', () => {
    const { getByPlaceholderText } = render(<HomeHeader />);
    const searchInput = getByPlaceholderText('Search plants, diseases...');

    fireEvent(searchInput, 'focus');

    expect(mockDispatch).toHaveBeenCalledWith(setIsSearching(true));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Search');
  });

  it('handles search text change correctly', () => {
    const { getByPlaceholderText } = render(<HomeHeader />);
    const searchInput = getByPlaceholderText('Search plants, diseases...');

    fireEvent.changeText(searchInput, 'test');

    expect(mockDispatch).toHaveBeenCalledWith(setSearchQuery('test'));
  });

  it('handles search press correctly', () => {
    const { getByTestId } = render(<HomeHeader />);
    const searchContainer = getByTestId('search-container');

    fireEvent.press(searchContainer);

    expect(mockDispatch).toHaveBeenCalledWith(setIsSearching(true));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Search');
  });
});