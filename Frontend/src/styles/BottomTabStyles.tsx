import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

import { COLORS } from "../themes/Colors";
import { METRICS } from "../themes/Metrics";

const BottomTabStyles: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: COLORS.secondaryBackground,
    borderColor: COLORS.border,
    borderTopWidth: METRICS.bottomBar.borderWidth,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    height: METRICS.bottomBar.height,
    paddingTop: METRICS.bottomBar.paddingTop,
  },
  tabBarActiveTintColor: COLORS.primaryText,
  tabBarInactiveTintColor: COLORS.secondaryText,
};

export default BottomTabStyles;
