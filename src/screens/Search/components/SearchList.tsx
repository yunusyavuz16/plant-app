import CategoryItem from "@/components/CategoryItem/CategoryItem";
import { TEXTS } from "@/constants/text";
import { useAppSelector } from "@/store";
import React, { useMemo } from "react";
import { FlatList, Text, View } from "react-native";
import styles from "../SearchScreenStyles";

const SearchList = () => {
  const { categories } = useAppSelector((state) => state.home);

  const { query } = useAppSelector((state) => state.search);

  const filteredCategories = useMemo(() => {
    if (!query.trim()) return categories;

    return categories.filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [categories, query]);

  const renderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>
        {query.trim() ? TEXTS.SEARCH.NO_RESULTS : TEXTS.SEARCH.START_TYPING}
      </Text>
    </View>
  );

  return (
    <FlatList
      data={filteredCategories}
      renderItem={({ item }) => (
        <CategoryItem title={item.title} url={item.image.url} />
      )}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContent}
      ListEmptyComponent={renderEmptyComponent}
    />
  );
};

export default SearchList;
