import { FC } from "react";
import { Switch, Text, View } from "react-native";

import { COLORS } from "../../../themes/Colors";
import styles from "./FormSwitch.styles";

type Props = {
  label: string;
  value: boolean;
  onValueChange: ((value: boolean) => void | Promise<void>) | null | undefined;
};

const FormSwitch: FC<Props> = ({ label, value, onValueChange }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: COLORS.primaryBackground, true: COLORS.secondary }}
        ios_backgroundColor={COLORS.primaryBackground}
      />
    </View>
  );
};

export default FormSwitch;
