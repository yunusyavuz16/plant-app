import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  ActivityIndicator,
  FlatList,
  RefreshControl,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../navigation/HomeStack";
import SearchIcon from "../../components/icons/SearchIcon";
import MailIcon from "../../components/icons/MailIcon";
import ChevronRightIcon from "../../components/icons/ChevronRightIcon";
import { Category } from '../../types/category';
import { categoryService } from '../../services/categoryService';
import styles from "./HomeScreen.styles";

type Props = NativeStackScreenProps<HomeStackParamList, "HomeScreen">;

/**
 * Get appropriate greeting based on time of day
 */
const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return { text: "Good Morning!", emoji: "🌤️" };
  if (hour < 17) return { text: "Good Afternoon!", emoji: "⛅" };
  return { text: "Good Evening!", emoji: "🌙" };
};

export const HomeScreen: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const insets = useSafeAreaInsets();
  const greeting = getGreeting();

  const fetchCategories = async () => {
    try {
      const response = await categoryService.getCategories();
      // Sort categories by rank
      const sortedCategories = response.data.sort((a, b) => a.rank - b.rank);
      setCategories(sortedCategories);
    } catch (error) {
      console.error('Error fetching categories:', error);
      // Here you might want to show an error message to the user
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchCategories();
  }, []);

  const renderCategoryItem = ({ item }: { item: Category }) => (
    <TouchableOpacity
      style={styles.categoryCard}
      onPress={() => {
        // Handle category selection
        console.log('Selected category:', item.title);
      }}
    >
      <Text style={styles.categoryTitle}>
        {item.title.includes(' ') ? item.title.replace(' ', '\n') : item.title}
      </Text>
      <Image
        source={{ uri: item.image.url }}
        style={styles.categoryImage}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.scrollView}>
      {/* Header */}
      <ImageBackground
        source={require("../../../assets/home/Background.png")}
      >
        <View style={[styles.header, { paddingTop: insets.top }]}>
          <Text style={styles.welcomeText}>Hi, plant lover!</Text>
          <Text style={styles.greetingText}>
            {greeting.text} {greeting.emoji}
          </Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <SearchIcon />
            <TextInput
              style={styles.searchInput}
              placeholder="Search for plants"
              placeholderTextColor="#AFAFAF"
            />
          </View>
        </View>
      </ImageBackground>

      {/* Premium Banner */}
      <TouchableOpacity style={styles.premiumBanner}>
        <View style={styles.premiumIconContainer}>
          <MailIcon />
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>1</Text>
          </View>
        </View>
        <View style={styles.premiumTextContainer}>
          <Text style={styles.premiumTitle}>FREE Premium Available</Text>
          <Text style={styles.premiumSubtitle}>
            Tap to upgrade your account!
          </Text>
        </View>
        <ChevronRightIcon />
      </TouchableOpacity>

      {/* Get Started Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Get Started</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.articlesRow}
          contentContainerStyle={styles.articlesContent}
        >
          <TouchableOpacity style={styles.articleCard}>
            <Image
              source={require("../../../assets/get-started/get-started-bg.png")}
              style={styles.articleImage}
              resizeMode="cover"
            />
            <View style={styles.articleOverlay} />
            <Text style={styles.articleTitle}>
              How to identify plants easily with PlantApp?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.articleCard, styles.marginLeft]}>
            <Image
              source={require("../../../assets/get-started/get-started-middle.png")}
              style={styles.articleImage}
              resizeMode="cover"
            />
            <View style={styles.articleOverlay} />
            <Text style={styles.articleTitle}>
              Species and varieties: what are the differences?
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Categories Section */}
      <View style={styles.categoriesContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.categoriesGrid}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        )}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
