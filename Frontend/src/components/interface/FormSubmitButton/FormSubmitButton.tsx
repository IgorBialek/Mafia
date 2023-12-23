import { FC } from "react";
import { Pressable, StyleProp, Text, ViewStyle } from "react-native";

import { COLORS } from "../../../themes/Colors";
import styles from "./FormSubmitButton.styles";

type Props = {
  onPress: () => void;
  title: string;
  style?: StyleProp<ViewStyle>;
};

const FormSubmitButton: FC<Props> = ({ onPress, title, style }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => {
        return [
          style,
          styles.container,
          {
            backgroundColor: pressed ? COLORS.tertiary : COLORS.secondary,
          },
        ];
      }}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default FormSubmitButton;
