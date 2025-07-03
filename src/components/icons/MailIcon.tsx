import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  color?: string;
  size?: number;
}

const MailIcon: React.FC<Props> = ({ color = '#E5C990', size = 36 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <Path
        d="M6 10C6 8.89543 6.89543 8 8 8H28C29.1046 8 30 8.89543 30 10V26C30 27.1046 29.1046 28 28 28H8C6.89543 28 6 27.1046 6 26V10Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 10L18 19L30 10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default MailIcon;