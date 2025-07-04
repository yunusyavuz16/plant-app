import React, { memo, useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  Linking,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ChevronRightIcon from "../../components/icons/ChevronRightIcon";
import MailIcon from "../../components/icons/MailIcon";
import { categoryService } from "../../services/categoryService";
import { questionService } from "../../services/questionService";
import { Category } from "../../types/category";
import { Question } from "../../types/question";
import styles from "./HomeScreen.styles";

export const HomeScreen: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const insets = useSafeAreaInsets();

  // Fetch data
  const fetchData = useCallback(async () => {
    try {
      const [catRes, qRes] = await Promise.all([
        categoryService.getCategories(),
        questionService.getQuestions(),
      ]);
      setCategories(catRes.data.sort((a, b) => a.rank - b.rank));
      setQuestions(qRes);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
  }, [fetchData]);

  // Renderers
  const renderQuestionItem = useCallback(
    ({ item }: { item: Question }) => (
      <TouchableOpacity
        style={styles.questionCard}
        onPress={() => Linking.openURL(item.uri)}
      >
        <ImageBackground
          source={{ uri: item.image_uri }}
          style={styles.questionBackground}
          imageStyle={styles.questionBackgroundImage}
        >
          <View style={styles.questionContent}>
            <Text style={styles.questionTitle}>{item.title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    ),
    []
  );

  const renderCategoryItem = useCallback(
    ({ item }: { item: Category }) => (
      <TouchableOpacity
        style={styles.categoryCard}
        onPress={() => console.log("Selected:", item.title)}
      >
        <Text style={styles.categoryTitle}>
          {item.title.includes(" ")
            ? item.title.replace(" ", "\n")
            : item.title}
        </Text>
        <Image
          source={{ uri: item.image.url }}
          style={styles.categoryImage}
          resizeMode="cover"
        />
      </TouchableOpacity>
    ),
    []
  );

  // Header + Search + Banner + Horizontal questions
  const ListHeader = memo(() => (
    <View>
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

      {/* Get Started / Questions Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Get Started</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={questions}
            horizontal
            renderItem={renderQuestionItem}
            keyExtractor={(q) => q.id.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.questionsGridContent}
          />
        )}
      </View>
    </View>
  ));

  return (
    <FlatList
      data={categories}
      keyExtractor={(c) => c.id.toString()}
      renderItem={renderCategoryItem}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={ListHeader}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default HomeScreen;
