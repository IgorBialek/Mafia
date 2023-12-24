import { Text, View } from 'react-native';
import { ToastConfig, ToastConfigParams } from 'react-native-toast-message';

import { COLORS } from '../themes/Colors';
import { METRICS } from '../themes/Metrics';

const ToastConfigDefault: ToastConfig = {
  error: ({ text1 }: ToastConfigParams<any>) => (
    <View
      style={{
        height: METRICS.toastConfig.error.height,
        width: "100%",
        backgroundColor: COLORS.error,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: METRICS.toastConfig.error.paddingTop,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          color: COLORS.primaryText,
          fontSize: METRICS.toastConfig.error.fontSize,
        }}
      >
        {text1}
      </Text>
    </View>
  ),
};

export default ToastConfigDefault;
