import { FieldProps } from "formik";
import { FC } from "react";
import { TextInput, View } from "react-native";

import styles from "./FormNumberInput.styles";

type Props = {
  placeholder: string;
};

const FormNumberInput: FC<Props & FieldProps> = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} />
    </View>
  );
};

export default FormNumberInput;
