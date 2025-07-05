import { Image } from "expo-image";
import React, { memo } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./CategoryItem.styles";

const CategoryItem = memo(
  ({ title, url }: { title: string; url: string }) => {
    return (
      <TouchableOpacity style={styles.categoryCard}>
        <Text style={styles.categoryTitle}>{title}</Text>
        <Image
          cachePolicy="memory-disk"
          source={{ uri: url }}
          style={styles.categoryImage}
        />
      </TouchableOpacity>
    );
  }
);

export default CategoryItem;
