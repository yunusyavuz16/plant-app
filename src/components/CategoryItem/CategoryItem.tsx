import { Image, ImageContentFit } from "expo-image";
import React, { memo, useCallback } from "react";
import { Text, TouchableOpacity, ViewStyle, TextStyle, StyleProp } from "react-native";
import { styles } from "./CategoryItem.styles";

/**
 * Props for the CategoryItem component
 * @property {string} title - The title of the category to display
 * @property {string} url - The URL of the image to display
 * @property {() => void} [onPress] - Optional callback function when the category is pressed
 * @property {StyleProp<ViewStyle>} [style] - Optional additional styles for the container
 * @property {StyleProp<TextStyle>} [titleStyle] - Optional additional styles for the title text
 * @property {ImageContentFit} [imageFit="cover"] - Optional image content fit mode
 * @property {boolean} [disabled] - Optional flag to disable the touch interaction
 * @property {string} [testID] - Optional test ID for testing purposes
 * @property {string} [accessibilityLabel] - Optional accessibility label for screen readers
 */
interface CategoryItemProps {
  title: string;
  url: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  imageFit?: ImageContentFit;
  disabled?: boolean;
  testID?: string;
  accessibilityLabel?: string;
}

/**
 * A reusable category item component that displays a title and an image.
 * The component is memoized for better performance.
 *
 * @example
 * ```tsx
 * <CategoryItem
 *   title="Plants"
 *   url="https://example.com/plants.jpg"
 *   onPress={() => console.log('Category pressed')}
 * />
 * ```
 */
const CategoryItem = memo(({
  title,
  url,
  onPress,
  style,
  titleStyle,
  imageFit = "cover",
  disabled = false,
  testID = "category-item",
  accessibilityLabel = title
}: CategoryItemProps) => {
  const handlePress = useCallback(() => {
    if (!disabled && onPress) {
      onPress();
    }
  }, [disabled, onPress]);

  return (
    <TouchableOpacity
      style={[styles.categoryCard, style]}
      onPress={handlePress}
      disabled={disabled}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
    >
      <Text
        style={[styles.categoryTitle, titleStyle]}
        numberOfLines={2}
        ellipsizeMode="tail"
        accessibilityRole="header"
      >
        {title}
      </Text>
      <Image
        cachePolicy="memory-disk"
        source={{ uri: url }}
        style={styles.categoryImage}
        contentFit={imageFit}
        transition={200}
        accessibilityRole="image"
        accessibilityLabel={`${title} category image`}
      />
    </TouchableOpacity>
  );
});

CategoryItem.displayName = "CategoryItem";

export default CategoryItem;
