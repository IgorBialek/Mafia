import { StyleSheet } from "react-native";

import { COLORS } from "../../../themes/Colors";
import { METRICS } from "../../../themes/Metrics";

const styles = (textColor: string, focused: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: METRICS.bottomBarItem.gap,
      backgroundColor: focused ? COLORS.tertiary : COLORS.secondaryBackground,
      borderRadius: METRICS.bottomBarItem.borderRadius,
      maxHeight: METRICS.bottomBarItem.height,
      paddingHorizontal: METRICS.bottomBarItem.paddingHorizontal,
    },
    text: {
      fontWeight: "bold",
      color: textColor,
    },
  });

export default styles;
