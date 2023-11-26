import { StyleSheet } from "react-native";

import { METRICS } from "../../../../themes/Metrics";

const styles = (color: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      gap: METRICS.bottomBar.itemGap,
    },
    text: {
      fontWeight: "bold",
      color: color,
    },
  });

export default styles;
