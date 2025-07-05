import { renderHook, act } from '@testing-library/react-hooks';
import { useHomeIndex } from '../useHomeIndex';
import * as homeSlice from '@/store/slices/homeSlice';
import { store } from '@/store';

// Mock the store
const mockDispatch = jest.fn();
const mockSelector = jest.fn();

type MockState = {
  home: {
    categories: any[];
    questions: any[];
    loading: boolean;
    error: string | null;
  };
};

jest.mock('@/store', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: (selector: (state: MockState) => any) => mockSelector(selector),
  store: {
    dispatch: mockDispatch,
  },
}));

// Mock the homeSlice
jest.mock('@/store/slices/homeSlice', () => ({
  fetchHomeData: jest.fn(() => ({ type: 'home/fetchHomeData' })),
}));

describe('useHomeIndex', () => {
  const defaultState = {
    categories: [],
    questions: [],
    loading: false,
    error: null,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    mockDispatch.mockImplementation(() => ({
      unwrap: () => Promise.resolve(defaultState),
    }));
    mockSelector.mockReturnValue(defaultState);
  });

  it('should initialize with default values', async () => {
    const { result } = renderHook(() => useHomeIndex());

    expect(result.current.refreshing).toBe(false);
    expect(typeof result.current.onRefresh).toBe('function');
    expect(typeof result.current.retry).toBe('function');
  });

  it('should handle successful data fetch', async () => {
    const mockData = {
      categories: [{ id: 1, name: 'Test Category' }],
      questions: [{ id: 1, text: 'Test Question' }],
    };

    mockDispatch.mockImplementation(() => ({
      unwrap: () => Promise.resolve(mockData),
    }));
    mockSelector.mockReturnValue(mockData);

    const { result, waitFor } = renderHook(() => useHomeIndex());

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalled();
      expect(homeSlice.fetchHomeData).toHaveBeenCalled();
    }, { timeout: 3000 });
  });

  it('should handle refresh', async () => {
    const { result } = renderHook(() => useHomeIndex());

    await act(async () => {
      await result.current.onRefresh();
    });

    expect(mockDispatch).toHaveBeenCalled();
    expect(homeSlice.fetchHomeData).toHaveBeenCalled();
  });

  it('should handle retry', async () => {
    const { result } = renderHook(() => useHomeIndex());

    await act(async () => {
      await result.current.retry();
    });

    expect(mockDispatch).toHaveBeenCalled();
    expect(homeSlice.fetchHomeData).toHaveBeenCalled();
  });

  it('should handle fetch error', async () => {
    const mockError = new Error('Failed to fetch');
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    mockDispatch.mockImplementation(() => ({
      unwrap: () => Promise.reject(mockError),
    }));

    const { result, waitFor } = renderHook(() => useHomeIndex());

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Error fetching home data:', mockError);
    }, { timeout: 3000 });

    consoleSpy.mockRestore();
  });
});