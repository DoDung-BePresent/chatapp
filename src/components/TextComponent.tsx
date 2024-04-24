import {  Text, StyleProp, TextStyle } from "react-native";
import React from "react";
import { globalStyles } from "../styles/globalStyles";
import { fontFamilies } from "../constants/fontsFamilies";
import { colors } from "../constants/colors";

interface Props {
  text: string;
  font?: string;
  color?: string;
  size?: string;
  type: "title" | "description";
  styles?: StyleProp<TextStyle>;
}

const TextComponent = (props: Props) => {
  const { text, font, color, size, type, styles } = props;
  return <Text style={[globalStyles.text, {
    fontFamily: type === 'title'?fontFamilies.bold : fontFamilies.regular,
    fontSize: type === 'title'? 16: 14,
    color: color ?? colors.white
  }, styles]}>{text}</Text>;
};

export default TextComponent;
