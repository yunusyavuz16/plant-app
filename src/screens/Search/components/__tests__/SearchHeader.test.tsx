import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SearchHeader from '../SearchHeader';
import { setSearchQuery } from '../../../../store/slices/searchSlice';
import { TEXTS } from '../../../../constants/text';
import * as store from '../../../../store';

// Mock navigation
const mockNavigate = jest.fn();
const mockGoBack = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
    goBack: mockGoBack,
  }),
}));

// Mock SearchIcon component
jest.mock('../../../../components/icons/SearchIcon', () => 'SearchIcon');

// Mock styles
jest.mock('../../SearchScreenStyles', () => ({
  __esModule: true,
  default: {
    searchHeader: {},
    searchInputContainer: {},
    searchInput: {},
    cancelButton: {},
  },
}));

const mockStore = configureStore([]);

describe('SearchHeader', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(store, 'useAppDispatch').mockReturnValue(mockDispatch);
  });

  it('renders correctly with initial state', () => {
    jest.spyOn(store, 'useAppSelector').mockReturnValue({ query: '' });

    const { getByPlaceholderText, getByText } = render(
      <Provider store={mockStore({})}>
        <SearchHeader />
      </Provider>
    );

    // Check if search input exists with correct placeholder
    const searchInput = getByPlaceholderText(TEXTS.HOME.SEARCH_PLACEHOLDER);
    expect(searchInput).toBeTruthy();
    expect(searchInput.props.autoFocus).toBe(true);
    expect(searchInput.props.placeholderTextColor).toBe('#AFAFAF');

    // Check if cancel button exists
    const cancelButton = getByText('Cancel');
    expect(cancelButton).toBeTruthy();
  });

  it('renders correctly with existing search query', () => {
    jest.spyOn(store, 'useAppSelector').mockReturnValue({ query: 'test query' });

    const { getByPlaceholderText } = render(
      <Provider store={mockStore({})}>
        <SearchHeader />
      </Provider>
    );

    // Check if search input shows existing query
    const searchInput = getByPlaceholderText(TEXTS.HOME.SEARCH_PLACEHOLDER);
    expect(searchInput.props.value).toBe('test query');
  });

  it('handles search input changes', () => {
    jest.spyOn(store, 'useAppSelector').mockReturnValue({ query: '' });

    const { getByPlaceholderText } = render(
      <Provider store={mockStore({})}>
        <SearchHeader />
      </Provider>
    );

    const searchInput = getByPlaceholderText(TEXTS.HOME.SEARCH_PLACEHOLDER);
    fireEvent.changeText(searchInput, 'new search');

    // Check if dispatch was called with correct action
    expect(mockDispatch).toHaveBeenCalledWith(setSearchQuery('new search'));
  });

  it('handles cancel button press', () => {
    jest.spyOn(store, 'useAppSelector').mockReturnValue({ query: '' });

    const { getByText } = render(
      <Provider store={mockStore({})}>
        <SearchHeader />
      </Provider>
    );

    const cancelButton = getByText('Cancel');
    fireEvent.press(cancelButton);

    // Check if navigation.goBack was called
    expect(mockGoBack).toHaveBeenCalled();
  });

  // Snapshot test
  it('matches snapshot', () => {
    jest.spyOn(store, 'useAppSelector').mockReturnValue({ query: '' });

    const { toJSON } = render(
      <Provider store={mockStore({})}>
        <SearchHeader />
      </Provider>
    );
    expect(toJSON()).toMatchSnapshot();
  });
});