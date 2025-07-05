import CategoryItem from "@/components/CategoryItem/CategoryItem";
import DataErrorView from "@/components/DataErrorView/DataErrorView";
import { useAppDispatch, useAppSelector } from "@/store";
import { fetchHomeData } from "@/store/slices/homeSlice";
import React from "react";
import { FlatList, View } from "react-native";
import styles from "./HomeScreen.styles";
import HomeListHeader from "./components/HomeListHeader";

export const HomeScreen: React.FC = () => {
  const { categories, error } = useAppSelector((state) => state.home);
  const dispatch = useAppDispatch();

  // Show error state
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
        keyExtractor={(c) => c.id.toString()}
        renderItem={({ item }) => (
          <CategoryItem title={item.title} url={item.image.url} />
        )}
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
