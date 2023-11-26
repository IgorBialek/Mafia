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
  },
  tabBarActiveTintColor: COLORS.primaryText,
  tabBarInactiveTintColor: COLORS.secondaryText,
};

export default BottomTabStyles;
