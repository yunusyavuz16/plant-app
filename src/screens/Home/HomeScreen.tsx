import { useAppSelector } from "@/store";
import React from "react";
import { FlatList, View } from "react-native";
import styles from "./HomeScreen.styles";
import HomeCategoryItem from "./components/HomeCategoryItem";
import HomeListHeader from "./components/HomeListHeader";

export const HomeScreen: React.FC = () => {
  const { categories } = useAppSelector((state) => state.home);

  return (
    <View style={styles.innerContainer}>
      <FlatList
        data={categories}
        keyExtractor={(c) => c.id.toString()}
        renderItem={({ item }) => (
          <HomeCategoryItem title={item.title} url={item.image.url} />
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
