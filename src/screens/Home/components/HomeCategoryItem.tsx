import { Image } from "expo-image";
import React, { memo } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../HomeScreen.styles";

const HomeCategoryItem = memo(
  ({ title, url }: { title: string; url: string }) => {
    return (
      <TouchableOpacity
        style={styles.categoryCard}
        onPress={() => console.log("Selected:", title)}
      >
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

export default HomeCategoryItem;
