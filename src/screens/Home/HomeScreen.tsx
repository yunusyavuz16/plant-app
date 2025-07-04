import DataErrorView from "@/components/DataErrorView/DataErrorView";
import { useAppDispatch, useAppSelector } from "@/store";
import { fetchHomeData } from "@/store/slices/homeSlice";
import React from "react";
import { FlatList, View } from "react-native";
import styles from "./HomeScreen.styles";
import HomeCategoryItem from "./components/HomeCategoryItem";
import HomeListHeader from "./components/HomeListHeader";
import { Category } from "@/types/category";

/**
 * Main home screen component that displays:
 * 1. A header with greeting and search
 * 2. A grid of plant categories
 * 3. Error state with retry option
 */
export const HomeScreen: React.FC = () => {
  const { categories, error } = useAppSelector((state) => state.home);
  const dispatch = useAppDispatch();

  /**
   * Renders a single category item in the grid
   * @param item - The category data to render
   */
  const renderCategoryItem = ({ item }: { item: Category }) => (
    <HomeCategoryItem title={item.title} url={item.image.url} />
  );

  /**
   * Unique key extractor for FlatList items
   * @param category - The category item
   */
  const keyExtractor = (category: Category) => category.id.toString();

  // Show error state with retry option
  if (error) {
    return (
      <View style={styles.container}>
        <DataErrorView
          message="Unable to load content"
          errorDetails={error}
          onRetry={() => dispatch(fetchHomeData())}
        />
      </View>
    );
  }

  return (
    <View style={styles.innerContainer}>
      <FlatList
        data={categories}
        keyExtractor={keyExtractor}
        renderItem={renderCategoryItem}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={HomeListHeader}
      />
    </View>
  );
};

export default HomeScreen;
