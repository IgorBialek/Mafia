import { StyleSheet } from "react-native";

import { COLORS } from "../../../themes/Colors";
import { METRICS } from "../../../themes/Metrics";

const styles = StyleSheet.create({
  title: {
    color: COLORS.primaryText,
    fontWeight: "bold",
    fontSize: METRICS.screenTitle.fontSize,
    margin: METRICS.screenTitle.margin,
    textAlign: "center",
  },
});

export default styles;
