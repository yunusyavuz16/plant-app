import { Image } from "expo-image";
import React, { memo } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../HomeScreen.styles";

/**
 * Props for the HomeCategoryItem component
 */
interface HomeCategoryItemProps {
  /** Title text to display on the category card */
  title: string;
  /** URL of the category image to display */
  url: string;
  /** Optional callback when category is selected */
  onSelect?: (title: string) => void;
}

/**
 * Displays a single category card with an image and title.
 * Used in the home screen's category grid.
 *
 * @memo This component is memoized to prevent unnecessary re-renders
 * when parent components update.
 */
const HomeCategoryItem: React.FC<HomeCategoryItemProps> = memo(
  ({ title, url, onSelect }) => {
    /**
     * Handles the press event on the category card
     */
    const handlePress = () => {
      console.log("Selected:", title);
      onSelect?.(title);
    };

    return (
      <TouchableOpacity
        style={styles.categoryCard}
        onPress={handlePress}
        accessibilityLabel={`Select ${title} category`}
        accessibilityRole="button"
      >
        <Text style={styles.categoryTitle}>{title}</Text>
        <Image
          cachePolicy="memory-disk"
          source={{ uri: url }}
          style={styles.categoryImage}
          contentFit="cover"
          transition={200}
        />
      </TouchableOpacity>
    );
  }
);

// Display name for debugging purposes
HomeCategoryItem.displayName = 'HomeCategoryItem';

export default HomeCategoryItem;
