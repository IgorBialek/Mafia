import { SafeAreaView } from 'react-native';
import Toast from 'react-native-toast-message';

import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ToastConfigDefault from './src/config/ToastConfig';
import HomeStack from './src/navigation/HomeStack';
import { COLORS } from './src/themes/Colors';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: COLORS.secondaryBackground }}
      >
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <HomeStack />
          </NavigationContainer>
        </QueryClientProvider>
      </SafeAreaView>
      <Toast config={ToastConfigDefault} />
    </>
  );
};

export default App;
