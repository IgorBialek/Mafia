import { StyleSheet } from "react-native";

import { COLORS } from "../../../themes/Colors";
import { METRICS } from "../../../themes/Metrics";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondaryBackground,
    flex: 1,
    paddingHorizontal: METRICS.screenWrapper.paddingHorizontal,
  },
});

export default styles;
