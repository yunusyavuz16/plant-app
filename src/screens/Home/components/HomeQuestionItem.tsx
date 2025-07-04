import { ImageBackground } from "expo-image";
import React, { memo } from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import styles from "../HomeScreen.styles";

/**
 * Props for the HomeQuestionItem component
 */
interface HomeQuestionItemProps {
  /** URL of the question's image and link destination */
  uri: string;
  /** Title text to display on the question card */
  title: string;
  /** Optional callback when link fails to open */
  onLinkError?: (error: Error) => void;
}

/**
 * Displays a single question card with background image and title.
 * When pressed, opens the URI in the device's browser.
 *
 * @memo This component is memoized to prevent unnecessary re-renders
 * in the horizontal question list.
 */
const HomeQuestionItem: React.FC<HomeQuestionItemProps> = memo(({
  uri,
  title,
  onLinkError
}) => {
  /**
   * Handles pressing the question card
   * Opens the URI in the device's browser
   */
  const handlePress = async () => {
    try {
      await Linking.openURL(uri);
    } catch (error) {
      console.error('Failed to open link:', error);
      onLinkError?.(error as Error);
    }
  };

  return (
    <TouchableOpacity
      style={styles.questionCard}
      onPress={handlePress}
      accessibilityLabel={`Open question about ${title}`}
      accessibilityRole="link"
    >
      <ImageBackground
        source={{ uri }}
        cachePolicy="memory-disk"
        style={styles.questionBackground}
        imageStyle={styles.questionBackgroundImage}
        contentFit="cover"
        transition={200}
      >
        <View style={styles.questionContent}>
          <Text
            style={styles.questionTitle}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
});

// Display name for debugging purposes
HomeQuestionItem.displayName = 'HomeQuestionItem';

export default HomeQuestionItem;
