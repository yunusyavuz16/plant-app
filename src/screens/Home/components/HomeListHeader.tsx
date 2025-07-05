import { TEXTS } from "@/constants/text";
import { useAppSelector } from "@/store";
import React, { memo } from "react";
import { FlatList, Text, View } from "react-native";
import styles from "../HomeScreen.styles";
import HomePremiumBanner from "./HomePremiumBanner";
import HomeQuestionItem from "./HomeQuestionItem";

const HomeListHeader = memo(() => {
  const { questions } = useAppSelector((state) => state.home);
  return (
    <View>
      <View testID="premium-banner-container">
        <HomePremiumBanner />
      </View>
      {/* Get Started / Questions Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle} testID="section-title">
          {TEXTS.HOME.SECTIONS.GET_STARTED}
        </Text>
        <FlatList
          testID="questions-list"
          data={questions}
          horizontal
          renderItem={({ item }) => (
            <View testID="question-item">
              <HomeQuestionItem uri={item.image_uri} title={item.title} />
            </View>
          )}
          keyExtractor={(q) => q.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.questionsGridContent}
        />
      </View>
    </View>
  );
});

export default HomeListHeader;
