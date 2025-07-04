import { TEXTS } from "@/constants/text";
import { useAppSelector } from "@/store";
import React, { memo } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import styles from "../HomeScreen.styles";
import HomePremiumBanner from "./HomePremiumBanner";
import HomeQuestionItem from "./HomeQuestionItem";

const HomeListHeader = // Header + Search + Banner + Horizontal questions
  memo(() => {
    const { questions } = useAppSelector((state) => state.home);
    return (
      <View>
        <HomePremiumBanner />
        {/* Get Started / Questions Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {TEXTS.HOME.SECTIONS.GET_STARTED}
          </Text>
          <FlatList
            data={questions}
            horizontal
            renderItem={({ item }) => (
              <HomeQuestionItem uri={item.image_uri} title={item.title} />
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
