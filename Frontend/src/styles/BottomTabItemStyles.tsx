import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

import { CreateRoomIcon } from "../components/icons/CreateRoomIcon";
import BottomTabItem from "../components/icons/interface/BottomTabItem/BottomTabItem";
import { JoinRoomIcon } from "../components/icons/JoinRoomIcon";
import { SCREENS } from "../constants/Screens";
import STRINGS from "../constants/Strings";

const BottomTabItemStyles = (type: string): BottomTabNavigationOptions => {
  switch (type) {
    case SCREENS.JoinRoom:
      return {
        tabBarIcon: ({ color }) => (
          <BottomTabItem color={color} text={STRINGS.bottomBar.itemJoinRoom}>
            <JoinRoomIcon color={color} />
          </BottomTabItem>
        ),
      };
    case SCREENS.CreateRoom:
      return {
        tabBarIcon: ({ color }) => (
          <BottomTabItem color={color} text={STRINGS.bottomBar.itemCreateRoom}>
            <CreateRoomIcon color={color} />
          </BottomTabItem>
        ),
      };
    default:
      return {};
  }
};

export default BottomTabItemStyles;
