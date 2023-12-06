import { FieldProps } from "formik";
import { FC } from "react";
import { Pressable, Text, View } from "react-native";

import { COLORS } from "../../../themes/Colors";
import { METRICS } from "../../../themes/Metrics";
import MinusIcon from "../../icons/MinusIcon";
import PlusIcon from "../../icons/PlusIcon";
import styles from "./FormNumberInput.styles";

type Props = {
  label: string;
  minVal: number;
  maxVal: number;
  value: number;
  onValueChange: (value: number) => void;
};

const FormNumberInput: FC<Props & FieldProps> = ({
  label,
  minVal,
  maxVal,
  value,
  onValueChange,
}) => {
  const handleMinusPress = () => {
    if (value > minVal) {
      onValueChange(value - 1);
    }
  };

  const handlePlusPress = () => {
    if (value < maxVal) {
      onValueChange(value + 1);
    }
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Pressable
          style={({ pressed }) => {
            return [
              styles.button,
              {
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                backgroundColor: pressed ? COLORS.tertiary : COLORS.secondary,
              },
            ];
          }}
          onPress={handleMinusPress}
        >
          <MinusIcon color={COLORS.primaryText} />
        </Pressable>
        <View style={styles.valueContainer}>
          <Text style={styles.valueText}>{value}</Text>
        </View>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            {
              borderTopRightRadius: METRICS.formNumberInput.input.borderRadius,
              borderBottomRightRadius:
                METRICS.formNumberInput.input.borderRadius,
              backgroundColor: pressed ? COLORS.tertiary : COLORS.secondary,
            },
          ]}
          onPress={handlePlusPress}
        >
          <PlusIcon color={COLORS.primaryText} />
        </Pressable>
      </View>
    </View>
  );
};

export default FormNumberInput;
