import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles, { getStyle } from "./SearchScreenStyles";
import SearchHeader from "./components/SearchHeader";
import SearchList from "./components/SearchList";

const SearchScreen = () => {
  const insets = useSafeAreaInsets();
  const style = getStyle(insets);

  return (
    <View style={[styles.container, style.container]}>
      <SearchHeader />
      <SearchList />
    </View>
  );
};

export default SearchScreen;
