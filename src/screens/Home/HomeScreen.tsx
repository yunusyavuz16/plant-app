import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../navigation/HomeStack";
import SearchIcon from "../../components/icons/SearchIcon";
import MailIcon from "../../components/icons/MailIcon";
import ChevronRightIcon from "../../components/icons/ChevronRightIcon";
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

const HomeScreen: React.FC<Props> = () => {
  const insets = useSafeAreaInsets();
  const greeting = getGreeting();

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

      {/* Categories Grid */}
      <View style={styles.categoriesContainer}>
        <TouchableOpacity style={styles.categoryCard}>
          <Text style={styles.categoryTitle}>Edible{"\n"}Plants</Text>
          <Image
            source={require("../../../assets/onboarding-1/Content.png")}
            style={styles.categoryImage}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard}>
          <Text style={styles.categoryTitle}>Ferns</Text>
          <Image
            source={require("../../../assets/onboarding-2/onboarding-2-middle.png")}
            style={styles.categoryImage}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard}>
          <Text style={styles.categoryTitle}>Cacti and{"\n"}Succulents</Text>
          <Image
            source={require("../../../assets/onboarding-1/Content.png")}
            style={styles.categoryImage}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard}>
          <Text style={styles.categoryTitle}>Palms</Text>
          <Image
            source={require("../../../assets/onboarding-2/onboarding-2-middle.png")}
            style={styles.categoryImage}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
