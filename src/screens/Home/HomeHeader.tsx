import SearchIcon from "@components/icons/SearchIcon";
import { TEXTS } from "@/constants/text";
import React, { useMemo } from "react";
import { ImageBackground, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./HomeScreen.styles";

const HomeHeader = () => {
  const insets = useSafeAreaInsets();
  // Greeting helper
  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return { text: TEXTS.HOME.GREETING.MORNING, emoji: "🌤️" };
    if (hour < 17) return { text: TEXTS.HOME.GREETING.AFTERNOON, emoji: "⛅" };
    return { text: TEXTS.HOME.GREETING.EVENING, emoji: "🌙" };
  }, []);
  return (
    <ImageBackground source={require("../../../assets/home/Background.png")}>
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <Text style={styles.welcomeText}>{TEXTS.HOME.WELCOME}</Text>
        <Text style={styles.greetingText}>
          {greeting.text} {greeting.emoji}
        </Text>
      </View>
      {/* Search */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <SearchIcon />
          <TextInput
            style={styles.searchInput}
            placeholder={TEXTS.HOME.SEARCH_PLACEHOLDER}
            placeholderTextColor="#AFAFAF"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeHeader;
