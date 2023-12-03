import { StyleSheet } from "react-native";

import { COLORS } from "../../../themes/Colors";
import { METRICS } from "../../../themes/Metrics";

const styles = StyleSheet.create({
  container: {
    marginBottom: METRICS.formNumberInput.container.marginBottom,
  },
  label: {
    marginVertical: METRICS.formNumberInput.label.marginVertical,
    color: COLORS.primaryText,
    fontWeight: "bold",
  },
  input: {
    width: METRICS.formNumberInput.button.width * 3,
    flexDirection: "row",
    backgroundColor: COLORS.secondaryBackground,
    color: COLORS.primaryText,
    fontWeight: "bold",
    borderRadius: METRICS.formNumberInput.input.borderRadius,
  },
  valueText: {
    color: COLORS.primaryText,
    fontWeight: "bold",
  },
  valueContainer: {
    height: METRICS.formNumberInput.valueContainer.height,
    width: METRICS.formNumberInput.valueContainer.width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primaryBackground,
  },
  button: {
    height: METRICS.formNumberInput.button.height,
    width: METRICS.formNumberInput.button.width,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
