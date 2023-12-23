import { StyleSheet } from "react-native";

import { COLORS } from "../../../themes/Colors";
import { METRICS } from "../../../themes/Metrics";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.tertiary,
    padding: METRICS.formSubmitButton.container.padding,
    borderRadius: METRICS.formSubmitButton.container.borderRadius,
    flexDirection: "row",
  },
  title: {
    fontSize: METRICS.formSubmitButton.title.fontSize,
    color: COLORS.primaryText,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
