import { StyleSheet } from "react-native";

import { COLORS } from "../../../themes/Colors";
import { METRICS } from "../../../themes/Metrics";

const styles = StyleSheet.create({
  label: {
    marginVertical: METRICS.formTextInput.label.marginVertical,
    color: COLORS.primaryText,
    fontWeight: "bold",
  },
  input: {
    padding: METRICS.formTextInput.input.padding,
    backgroundColor: COLORS.primaryBackground,
    color: COLORS.primaryText,
    fontWeight: "bold",
    borderRadius: METRICS.formTextInput.input.borderRadius,
  },
});

export default styles;
