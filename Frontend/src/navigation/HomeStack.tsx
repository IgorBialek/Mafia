import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SCREENS } from "../constants/Screens";
import CreateRoomScreen from "../screens/home/CreateRoomScreen";
import JoinRoomScreen from "../screens/home/JoinRoomScreen";
import BottomTabItemStyles from "../styles/BottomTabItemStyles";
import BottomTabStyles from "../styles/BottomTabStyles";

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator
      screenOptions={BottomTabStyles}
      initialRouteName={SCREENS.CreateRoom}
    >
      <Tab.Screen
        options={() => BottomTabItemStyles(SCREENS.JoinRoom)}
        name={SCREENS.JoinRoom}
        component={JoinRoomScreen}
      />
      <Tab.Screen
        options={() => BottomTabItemStyles(SCREENS.CreateRoom)}
        name={SCREENS.CreateRoom}
        component={CreateRoomScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeStack;
