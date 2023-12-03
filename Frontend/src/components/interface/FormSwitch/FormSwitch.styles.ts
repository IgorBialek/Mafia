import { StyleSheet } from "react-native";

import { COLORS } from "../../../themes/Colors";
import { METRICS } from "../../../themes/Metrics";

const styles = StyleSheet.create({
  container: {
    marginBottom: METRICS.formSwitch.container.marginBottom,
  },
  label: {
    marginVertical: METRICS.formSwitch.label.marginVertical,
    color: COLORS.primaryText,
    fontWeight: "bold",
  },
});

export default styles;
