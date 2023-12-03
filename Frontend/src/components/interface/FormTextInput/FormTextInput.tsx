import { FieldProps } from "formik";
import { FC } from "react";
import { Text, TextInput, View } from "react-native";

import { COLORS } from "../../../themes/Colors";
import styles from "./FormTextInput.styles";

type Props = {
  label: string;
  placeholder: string;
};

const FormTextInput: FC<Props & FieldProps> = ({ label, placeholder }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={COLORS.secondaryText}
      />
    </View>
  );
};

export default FormTextInput;
