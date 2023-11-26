import { SafeAreaView } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import HomeStack from "./src/navigation/HomeStack";
import { COLORS } from "./src/themes/Colors";

const App = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.secondaryBackground }}
    >
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
