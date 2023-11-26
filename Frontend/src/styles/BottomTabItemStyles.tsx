import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

import { CreateRoomIcon } from "../components/icons/CreateRoomIcon";
import { JoinRoomIcon } from "../components/icons/JoinRoomIcon";
import BottomTabItem from "../components/interface/BottomTabItem/BottomTabItem";
import { SCREENS } from "../constants/Screens";
import STRINGS from "../constants/Strings";

const BottomTabItemStyles = (type: string): BottomTabNavigationOptions => {
  switch (type) {
    case SCREENS.JoinRoom:
      return {
        tabBarIcon: ({ color, focused }) => (
          <BottomTabItem
            color={color}
            text={STRINGS.bottomBar.itemJoinRoom}
            focused={focused}
          >
            <JoinRoomIcon color={color} />
          </BottomTabItem>
        ),
      };
    case SCREENS.CreateRoom:
      return {
        tabBarIcon: ({ color, focused }) => (
          <BottomTabItem
            color={color}
            text={STRINGS.bottomBar.itemCreateRoom}
            focused={focused}
          >
            <CreateRoomIcon color={color} />
          </BottomTabItem>
        ),
      };
    default:
      return {};
  }
};

export default BottomTabItemStyles;
