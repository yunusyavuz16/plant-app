import React, { memo, useCallback, useEffect } from "react";
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
import ChevronRightIcon from "../../components/icons/ChevronRightIcon";
import MailIcon from "../../components/icons/MailIcon";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchHomeData } from "../../store/slices/homeSlice";
import { Category } from "../../types/category";
import { Question } from "../../types/question";
import styles from "./HomeScreen.styles";
import { spacing } from "@/constants/theme";
import { TEXTS } from "@/constants/text";

export const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categories, questions, loading } = useAppSelector(
    (state) => state.home
  );
  const [refreshing, setRefreshing] = React.useState(false);

  // Fetch data
  const fetchData = useCallback(async () => {
    try {
      await dispatch(fetchHomeData()).unwrap();
    } catch (e) {
      console.error(e);
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
  }, []);

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
          <Text style={styles.premiumTitle}>{TEXTS.HOME.PREMIUM_BANNER.TITLE}</Text>
          <Text style={styles.premiumSubtitle}>
            {TEXTS.HOME.PREMIUM_BANNER.SUBTITLE}
          </Text>
        </View>
        <ChevronRightIcon />
      </TouchableOpacity>

      {/* Get Started / Questions Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{TEXTS.HOME.SECTIONS.GET_STARTED}</Text>
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
    <View style={styles.innerContainer}>
      <FlatList
        data={categories}
        keyExtractor={(c) => c.id.toString()}
        renderItem={renderCategoryItem}
        numColumns={2}
        columnWrapperStyle={{ gap: 8, marginHorizontal: spacing.xxl }}
        contentContainerStyle={{ gap: 16 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ListHeader}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default HomeScreen;
