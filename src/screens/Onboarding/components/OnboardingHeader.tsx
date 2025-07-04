import { OnboardingScreenKeyType, OnboardingScreens } from "@/constants/screen";
import React from "react";
import { Image, Text, View } from "react-native";
import BenefitsStyles from "../BenefitsScreen.styles";
import FeaturesStyles from "../FeaturesScreen.styles";
import WelcomStyles from "../WelcomeScreen.styles";

const OnboardingHeader = ({
  screenName,
  title,
  titleHighlight,
  description,
  titleHighlightPosition = "start",
}: {
  screenName: OnboardingScreenKeyType;
  title?: string;
  titleHighlight?: string;
  description?: string;
  titleHighlightPosition?: "start" | "end";
}) => {
  if (screenName === OnboardingScreens.FEATURES) {
    return (
      <View style={FeaturesStyles.header}>
        <View style={FeaturesStyles.titleRow}>
          <Text style={FeaturesStyles.title}>
            Take a photo to{" "}
            <Text style={FeaturesStyles.titleHighlight}>identify</Text>
          </Text>
          <Image
            source={require("../../../../assets/onboarding-1/Brush.png")}
            style={FeaturesStyles.brushImage}
            resizeMode="contain"
          />
        </View>
        <Text style={FeaturesStyles.title}>the plant!</Text>
      </View>
    );
  }
  if (screenName === OnboardingScreens.BENEFITS) {
    return (
      <View style={BenefitsStyles.header}>
        <View style={BenefitsStyles.titleRow}>
          <Text style={BenefitsStyles.title}>
            Get plant{" "}
            <Text style={BenefitsStyles.titleHighlight}>care guides</Text>
          </Text>
          <Image
            source={require("../../../../assets/onboarding-2/Brush.png")}
            style={BenefitsStyles.brushImage}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  }

  return (
    <View style={WelcomStyles.header}>
      <Text style={WelcomStyles.title}>
        {titleHighlightPosition === "end" ? (
          title + " "
        ) : (
          <Text style={WelcomStyles.titleHighlight}>{titleHighlight} </Text>
        )}
        {titleHighlightPosition === "start" ? (
          title + " "
        ) : (
          <Text style={WelcomStyles.titleHighlight}>{titleHighlight}</Text>
        )}
      </Text>
      <Text style={WelcomStyles.subtitle}>{description}</Text>
    </View>
  );
};

export default OnboardingHeader;
