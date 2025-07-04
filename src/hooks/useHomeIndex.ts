import { useAppDispatch, useAppSelector } from "@/store";
import { fetchHomeData } from "@/store/slices/homeSlice";
import { useCallback, useEffect, useState } from "react";

export const useHomeIndex = () => {
  const dispatch = useAppDispatch();
  const { categories, questions, loading } = useAppSelector(
    (state) => state.home
  );
  const [refreshing, setRefreshing] = useState(false);

  // Fetch data
  const fetchData = useCallback(async () => {
    try {
      await dispatch(fetchHomeData()).unwrap();
    } catch (e) {
      console.error(e);
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
  }, []);

  return { categories, questions, loading, refreshing, onRefresh };
};
