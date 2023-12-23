import { FC } from "react";
import { Switch, View } from "react-native";

import { COLORS } from "../../../themes/Colors";
import FormLabel from "../FormLabel/FormLabel";

type Props = {
  title: string;
  value: boolean;
  valid: boolean;
  onValueChange: ((value: boolean) => void | Promise<void>) | null | undefined;
};

const FormSwitch: FC<Props> = ({ title, value, valid, onValueChange }) => {
  return (
    <View>
      <FormLabel title={title} valid={valid} />
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
