import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  Linking,
  RefreshControl,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Question } from "../../types/question";
import ChevronRightIcon from "../../components/icons/ChevronRightIcon";
import MailIcon from "../../components/icons/MailIcon";
import SearchIcon from "../../components/icons/SearchIcon";
import { HomeStackParamList } from "../../navigation/HomeStack";
import { categoryService } from "../../services/categoryService";
import { Category } from "../../types/category";
import styles from "./HomeScreen.styles";
import { questionService } from "../../services/questionService";

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
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const { width } = useWindowDimensions();

  const insets = useSafeAreaInsets();
  const greeting = getGreeting();

  const fetchData = async () => {
    try {
      const [categoriesData, questionsData] = await Promise.all([
        categoryService.getCategories(),
        questionService.getQuestions(),
      ]);
      setCategories(categoriesData.data.sort((a, b) => a.rank - b.rank));
      setQuestions(questionsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchData();
  }, []);

  const renderCategoryItem = ({ item }: { item: Category }) => (
    <TouchableOpacity
      style={styles.categoryCard}
      onPress={() => {
        // Handle category selection
        console.log("Selected category:", item.title);
      }}
    >
      <Text style={styles.categoryTitle}>
        {item.title.includes(" ") ? item.title.replace(" ", "\n") : item.title}
      </Text>
      <Image
        source={{ uri: item.image.url }}
        style={styles.categoryImage}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );

  const renderQuestionItem = ({ item }: { item: Question }) => (
    <TouchableOpacity
      style={[styles.questionCard, { width: width - 48 }]}
      onPress={() => Linking.openURL(item.uri)}
    >
      <ImageBackground
        source={{ uri: item.image_uri }}
        style={styles.questionBackground}
        imageStyle={styles.questionBackgroundImage}
      >
        <View style={styles.questionContent}>
          <Text style={styles.questionTitle}>{item.title}</Text>
          <Text style={styles.questionSubtitle}>{item.subtitle}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.scrollView}>
      {/* Header */}
      <ImageBackground source={require("../../../assets/home/Background.png")}>
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
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={questions}
            horizontal
            renderItem={renderQuestionItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        )}
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
