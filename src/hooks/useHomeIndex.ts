import { useAppDispatch, useAppSelector } from "@/store";
import { fetchHomeData } from "@/store/slices/homeSlice";
import { useCallback, useEffect, useState } from "react";

interface UseHomeIndexReturn {
  categories: any[];
  questions: any[];
  loading: boolean;
  error: string | null;
  refreshing: boolean;
  onRefresh: () => void;
  retry: () => Promise<void>;
}

export const useHomeIndex = (): UseHomeIndexReturn => {
  const dispatch = useAppDispatch();
  const { categories, questions, loading, error } = useAppSelector(
    (state) => state.home
  );
  const [refreshing, setRefreshing] = useState(false);

  // Fetch data
  const fetchData = useCallback(async () => {
    try {
      await dispatch(fetchHomeData()).unwrap();
    } catch (e) {
      console.error('Error fetching home data:', e);
    } finally {
      setRefreshing(false);
    }
  }, []);

  // Initial fetch
  useEffect(() => {
    fetchData();
  }, []);

  // Pull to refresh handler
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
  }, []);

  // Retry handler for error state
  const retry = useCallback(async () => {
    await fetchData();
  }, []);

  return {
    categories,
    questions,
    loading,
    error,
    refreshing,
    onRefresh,
    retry
  };
};
