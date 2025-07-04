import { ImageBackground } from "expo-image";
import React, { memo } from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import styles from "../HomeScreen.styles";

const HomeQuestionItem = // Renderers
  memo(
    ({ uri, title }: { uri: string; title: string }) => (
      <TouchableOpacity
        style={styles.questionCard}
        onPress={() => Linking.openURL(uri)}
      >
        <ImageBackground
          source={{ uri }}
          cachePolicy="memory-disk"
          style={styles.questionBackground}
          imageStyle={styles.questionBackgroundImage}
        >
          <View style={styles.questionContent}>
            <Text style={styles.questionTitle}>{title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    ),
    []
  );

export default HomeQuestionItem;
