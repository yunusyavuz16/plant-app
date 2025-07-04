import React from "react";
import Svg, {
  Defs,
  FeBlend,
  FeColorMatrix,
  FeComposite,
  FeFlood,
  FeGaussianBlur,
  FeOffset,
  Filter,
  G,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";

interface Props {
  size?: number;
}

const MailIcon: React.FC<Props> = ({ size = 52 }) => {
  return (
    <Svg width={size} height={size * (45 / 52)} viewBox="0 0 52 45" fill="none">
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="26"
          y1="14.4616"
          x2="41.8085"
          y2="37.5515"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F0D399" />
          <Stop offset="1" stopColor="#D9A846" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1="26"
          y1="7.7656"
          x2="38.3343"
          y2="29.1859"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F0D399" />
          <Stop offset="1" stopColor="#D9A846" />
        </LinearGradient>
        <Filter
          id="filter0_d"
          x="0"
          y="0.765594"
          width="52"
          height="43.9667"
          filterUnits="userSpaceOnUse"
        >
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <FeOffset dy="3" />
          <FeGaussianBlur stdDeviation="5" />
          <FeComposite in2="hardAlpha" operator="out" />
          <FeColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
          />
          <FeBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </Filter>
      </Defs>
      <G filter="url(#filter0_d)">
        <Path
          d="M28.6743 23.3548C27.8782 23.8855 26.9534 24.1661 26 24.1661C25.0466 24.1661 24.1219 23.8855 23.3258 23.3548L10.2131 14.6127C10.1403 14.5642 10.0694 14.5137 10 14.4617V28.7865C10 30.4288 11.3328 31.7323 12.9458 31.7323H39.0541C40.6965 31.7323 41.9999 30.3995 41.9999 28.7865V14.4616C41.9304 14.5137 41.8594 14.5644 41.7864 14.613L28.6743 23.3548Z"
          fill="url(#paint0_linear)"
        />
        <Path
          d="M11.2531 13.0526L24.3658 21.7947C24.8622 22.1257 25.4311 22.2911 25.9999 22.2911C26.5689 22.2911 27.1378 22.1256 27.6342 21.7947L40.7469 13.0526C41.5316 12.5298 42 11.6548 42 10.7104C42 9.08659 40.6789 7.76559 39.0552 7.76559H12.9448C11.3211 7.76566 10 9.08666 10 10.712C10 11.6548 10.4685 12.5298 11.2531 13.0526V13.0526Z"
          fill="url(#paint1_linear)"
        />
      </G>
    </Svg>
  );
};

export default MailIcon;
