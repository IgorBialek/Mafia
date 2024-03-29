import { StyleSheet } from "react-native";

import { COLORS } from "../../../themes/Colors";
import { METRICS } from "../../../themes/Metrics";

const styles = StyleSheet.create({
  input: {
    padding: METRICS.formTextInput.input.padding,
    backgroundColor: COLORS.primaryBackground,
    color: COLORS.primaryText,
    fontWeight: "bold",
    borderRadius: METRICS.formTextInput.input.borderRadius,
  },
});

export default styles;
