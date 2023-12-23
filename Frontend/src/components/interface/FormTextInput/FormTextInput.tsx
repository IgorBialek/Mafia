import { FieldProps } from "formik";
import { FC } from "react";
import { TextInput, View } from "react-native";

import { COLORS } from "../../../themes/Colors";
import FormLabel from "../FormLabel/FormLabel";
import styles from "./FormTextInput.styles";

type Props = {
  title: string;
  placeholder: string;
  value: string;
  valid?: boolean;
  onChangeText: (value: string) => void;
};

const FormTextInput: FC<Props & FieldProps> = ({
  title,
  placeholder,
  value,
  valid,
  onChangeText,
}) => {
  return (
    <View>
      <FormLabel title={title} valid={valid} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={COLORS.secondaryText}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default FormTextInput;
