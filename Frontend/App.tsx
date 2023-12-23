import { SafeAreaView } from "react-native";
import Toast from "react-native-toast-message";

import { NavigationContainer } from "@react-navigation/native";

import ToastConfigDefault from "./config/ToastConfig";
import HomeStack from "./src/navigation/HomeStack";
import { COLORS } from "./src/themes/Colors";

const App = () => {
  return (
    <>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: COLORS.secondaryBackground }}
      >
        <NavigationContainer>
          <HomeStack />
        </NavigationContainer>
      </SafeAreaView>
      <Toast config={ToastConfigDefault} />
    </>
  );
};

export default App;
