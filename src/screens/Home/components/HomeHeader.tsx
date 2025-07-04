import { TEXTS } from "@/constants/text";
import { useAppDispatch, useAppSelector } from "@/store";
import { setIsSearching, setSearchQuery } from "@/store/slices/searchSlice";
import SearchIcon from "@components/icons/SearchIcon";
import { useNavigation } from "@react-navigation/native";
import React, { useMemo } from "react";
import {
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "../HomeScreen.styles";

const HomeHeader = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { query } = useAppSelector((state) => state.search);

  // Greeting helper
  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return { text: TEXTS.HOME.GREETING.MORNING, emoji: "🌤️" };
    if (hour < 17) return { text: TEXTS.HOME.GREETING.AFTERNOON, emoji: "⛅" };
    return { text: TEXTS.HOME.GREETING.EVENING, emoji: "🌙" };
  }, []);

  const handleSearchFocus = () => {
    dispatch(setIsSearching(true));
    navigation.navigate("Search" as never);
  };

  const handleSearchChange = (text: string) => {
    dispatch(setSearchQuery(text));
  };

  return (
    <ImageBackground source={require("../../../../assets/home/Background.png")}>
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <Text style={styles.welcomeText}>{TEXTS.HOME.WELCOME}</Text>
        <Text style={styles.greetingText}>
          {greeting.text} {greeting.emoji}
        </Text>
      </View>
      {/* Search */}
      <View style={styles.searchContainer}>
        <Pressable
          style={styles.searchInputContainer}
          onPress={handleSearchFocus}
        >
          <SearchIcon />
          <TextInput
            style={styles.searchInput}
            placeholder={TEXTS.HOME.SEARCH_PLACEHOLDER}
            placeholderTextColor="#AFAFAF"
            value={query}
            onChangeText={handleSearchChange}
            onFocus={handleSearchFocus}
          />
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default HomeHeader;
