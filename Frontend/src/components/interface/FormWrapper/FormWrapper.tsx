import { FC, ReactNode } from "react";
import { View } from "react-native";

import styles from "./FormWrapper.styles";

type Props = {
  children: ReactNode;
};

const FormWrapper: FC<Props> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default FormWrapper;
