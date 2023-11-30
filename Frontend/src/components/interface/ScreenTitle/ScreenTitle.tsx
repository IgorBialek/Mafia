import { FC } from "react";
import { Text, View } from "react-native";

import styles from "./ScreenTitle.styles";

type Props = {
  title: string;
};

const ScreenTitle: FC<Props> = ({ title }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default ScreenTitle;
