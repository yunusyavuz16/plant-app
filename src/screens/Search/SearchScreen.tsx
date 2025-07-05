import CategoryItem from "@/components/CategoryItem/CategoryItem";
import SearchIcon from "@/components/icons/SearchIcon";
import { TEXTS } from "@/constants/text";
import { useAppDispatch, useAppSelector } from "@/store";
import { setSearchQuery } from "@/store/slices/searchSlice";
import { useNavigation } from "@react-navigation/native";
import React, { useMemo } from "react";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles, { getStyle } from "./SearchScreenStyles";

const SearchScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.home);
  const { query } = useAppSelector((state) => state.search);
  const style = getStyle(insets);
  const filteredCategories = useMemo(() => {
    if (!query.trim()) return categories;

    return categories.filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [categories, query]);

  const handleSearchChange = (text: string) => {
    dispatch(setSearchQuery(text));
  };

  const renderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>
        {query.trim() ? TEXTS.SEARCH.NO_RESULTS : TEXTS.SEARCH.START_TYPING}
      </Text>
    </View>
  );

  return (
    <View style={[styles.container, style.container]}>
      <View style={styles.searchHeader}>
        <View style={styles.searchInputContainer}>
          <SearchIcon />
          <TextInput
            style={styles.searchInput}
            placeholder={TEXTS.HOME.SEARCH_PLACEHOLDER}
            placeholderTextColor="#AFAFAF"
            value={query}
            onChangeText={handleSearchChange}
            autoFocus={true}
          />
        </View>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButton}>Cancel</Text>
        </Pressable>
      </View>
      <FlatList
        data={filteredCategories}
        renderItem={({ item }) => (
          <CategoryItem title={item.title} url={item.image.url} />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={renderEmptyComponent}
      />
    </View>
  );
};

export default SearchScreen;
