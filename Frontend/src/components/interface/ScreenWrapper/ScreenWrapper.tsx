import { FC, ReactNode } from "react";
import { View } from "react-native";

import styles from "./ScreenWrapper.styles";

type Props = {
  children: ReactNode;
};

const ScreenWrapper: FC<Props> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default ScreenWrapper;
