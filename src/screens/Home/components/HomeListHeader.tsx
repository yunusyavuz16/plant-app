import ChevronRightIcon from "@/components/icons/ChevronRightIcon";
import MailIcon from "@/components/icons/MailIcon";
import { TEXTS } from "@/constants/text";
import { useAppSelector } from "@/store";
import React, { memo } from "react";
import {
    ActivityIndicator,
    FlatList,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import styles from "../HomeScreen.styles";
import HomeQuestionItem from "./HomeQuestionItem";

const HomeListHeader = // Header + Search + Banner + Horizontal questions
  memo(() => {
    const { questions, loading } = useAppSelector((state) => state.home);
    return (
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
            <Text style={styles.premiumTitle}>
              {TEXTS.HOME.PREMIUM_BANNER.TITLE}
            </Text>
            <Text style={styles.premiumSubtitle}>
              {TEXTS.HOME.PREMIUM_BANNER.SUBTITLE}
            </Text>
          </View>
          <ChevronRightIcon />
        </TouchableOpacity>

        {/* Get Started / Questions Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            {TEXTS.HOME.SECTIONS.GET_STARTED}
          </Text>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
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
          )}
        </View>
      </View>
    );
  });

export default HomeListHeader;
