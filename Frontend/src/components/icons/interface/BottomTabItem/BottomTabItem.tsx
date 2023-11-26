import { FC, ReactNode } from "react";
import { Text, View } from "react-native";

import styles from "./BottomTabItem.styles";

interface Props {
  children: ReactNode;
  color: string;
  text: string;
}

const BottomTabItem: FC<Props> = ({ children, color, text }) => {
  return (
    <View style={styles(color).container}>
      {children}
      <Text style={styles(color).text}>{text}</Text>
    </View>
  );
};

export default BottomTabItem;
