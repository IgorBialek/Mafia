import { FC } from "react";
import { Text, View } from "react-native";

import styles from "./FormLabel.styles";

type Props = {
  title: string;
  valid?: boolean;
};

const FormLabel: FC<Props> = ({ title, valid }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
        {valid !== undefined && (valid ? " ✅" : " ❌")}
      </Text>
    </View>
  );
};

export default FormLabel;
