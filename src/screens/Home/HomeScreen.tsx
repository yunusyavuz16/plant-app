import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigation/HomeStack';
import styles from './HomeScreen.styles';

type Props = NativeStackScreenProps<HomeStackParamList, 'HomeScreen'>;

/**
 * Get appropriate greeting based on time of day
 */
const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return { text: 'Good Morning!', emoji: '🌤️' };
  if (hour < 17) return { text: 'Good Afternoon!', emoji: '⛅' };
  return { text: 'Good Evening!', emoji: '🌙' };
};

const HomeScreen: React.FC<Props> = () => {
  const insets = useSafeAreaInsets();
  const greeting = getGreeting();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={[styles.header, { paddingTop: insets.top }]}>
          <Text style={styles.welcomeText}>Hi, plant lover!</Text>
          <Text style={styles.greetingText}>
            {greeting.text} {greeting.emoji}
          </Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Image
            source={require('../../../assets/home/leaf-left.png')}
            style={styles.searchLeafLeft}
          />
          <View style={styles.searchInputContainer}>
            <Image
              source={require('../../../assets/home/search-icon.png')}
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search for plants"
              placeholderTextColor="#AFAFAF"
            />
          </View>
          <Image
            source={require('../../../assets/home/leaf-right.png')}
            style={styles.searchLeafRight}
          />
        </View>

        {/* Premium Banner */}
        <TouchableOpacity style={styles.premiumBanner}>
          <View style={styles.premiumIconContainer}>
            <Image
              source={require('../../../assets/home/mail-icon.png')}
              style={styles.mailIcon}
            />
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationText}>1</Text>
            </View>
          </View>
          <View style={styles.premiumTextContainer}>
            <Text style={styles.premiumTitle}>FREE Premium Available</Text>
            <Text style={styles.premiumSubtitle}>Tap to upgrade your account!</Text>
          </View>
          <Image
            source={require('../../../assets/home/chevron-right.png')}
            style={styles.chevronIcon}
          />
        </TouchableOpacity>

        {/* Get Started Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Get Started</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.articlesRow}
          >
            <TouchableOpacity style={styles.articleCard}>
              <Image
                source={require('../../../assets/home/article-1.png')}
                style={styles.articleImage}
              />
              <Text style={styles.articleTitle}>
                How to identify plants easily with PlantApp?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.articleCard, styles.marginLeft]}>
              <Image
                source={require('../../../assets/home/article-2.png')}
                style={styles.articleImage}
              />
              <Text style={styles.articleTitle}>
                Species and varieties: what are the differences?
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Categories Grid */}
        <View style={styles.categoriesContainer}>
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryTitle}>Edible{'\n'}Plants</Text>
            <Image
              source={require('../../../assets/home/category-1.png')}
              style={styles.categoryImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryTitle}>Ferns</Text>
            <Image
              source={require('../../../assets/home/category-2.png')}
              style={styles.categoryImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryTitle}>Cacti and{'\n'}Succulents</Text>
            <Image
              source={require('../../../assets/home/category-3.png')}
              style={styles.categoryImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryTitle}>Palms</Text>
            <Image
              source={require('../../../assets/home/category-4.png')}
              style={styles.categoryImage}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;