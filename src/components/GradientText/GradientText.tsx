// components/SvgGradientText.tsx
import { typography } from "@/constants/theme";
import React from "react";
import { StyleProp, TextStyle } from "react-native";
import Svg, {
  Defs,
  Stop,
  LinearGradient as SvgLinearGradient,
  Text as SvgText,
} from "react-native-svg";

interface SvgGradientTextProps {
  text: string;
  width?: number; // optional: to fit your layout
  height?: number; // optional: to fit your layout
  fontSize?: number;
  fontWeight?: string;
  style?: StyleProp<TextStyle>;
  colors: [string, string];
}

export const SvgGradientText: React.FC<SvgGradientTextProps> = ({
  text,
  width = 300,
  height = 60,
  fontSize = 32,
  fontWeight = "700",
  style,
  colors: [startColor, endColor],
}) => (
  <Svg width={width} height={height} style={style}>
    <Defs>
      <SvgLinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor={startColor} />
        <Stop offset="100%" stopColor={endColor} />
      </SvgLinearGradient>
    </Defs>

    <SvgText
      fill="url(#grad)"
      x="0"
      y={fontSize}
      fontFamily={typography.fonts.SFProText}
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...(style as any)}
    >
      {text}
    </SvgText>
  </Svg>
);
