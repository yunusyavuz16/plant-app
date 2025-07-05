import SearchIcon from "@/components/icons/SearchIcon";
import { TEXTS } from "@/constants/text";
import { useAppDispatch, useAppSelector } from "@/store";
import { setSearchQuery } from "@/store/slices/searchSlice";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import styles from "../SearchScreenStyles";

const SearchHeader = () => {
  const dispatch = useAppDispatch();

  const navigation = useNavigation();

  const { query } = useAppSelector((state) => state.search);

  const handleSearchChange = (text: string) => {
    dispatch(setSearchQuery(text));
  };
  return (
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
  );
};

export default SearchHeader;
