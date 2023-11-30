import { FieldProps } from "formik";
import { FC } from "react";
import { TextInput, View } from "react-native";

import styles from "./FormTextInput.styles";

type Props = {
  placeholder: string;
};

const FormTextInput: FC<Props & FieldProps> = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} />
    </View>
  );
};

export default FormTextInput;
