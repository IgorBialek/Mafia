import { FC, ReactNode, useCallback, useState } from "react";
import { Text } from "react-native";
import Animated, {
  Easing,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";

import { useFocusEffect } from "@react-navigation/native";

import { METRICS } from "../../../themes/Metrics";
import styles from "./BottomTabItem.styles";

type Props = {
  children: ReactNode;
  color: string;
  text: string;
  focused: boolean;
};

const BottomTabItem: FC<Props> = ({ children, color, text, focused }) => {
  const containerWidth = useSharedValue(METRICS.bottomBarItem.width);
  const textScale = useSharedValue(0);

  const [showText, setShowText] = useState(false);

  useFocusEffect(
    useCallback(() => {
      if (focused) {
        playAnimation();
      }

      return () => {
        containerWidth.value = METRICS.bottomBarItem.width;
        textScale.value = 0;
      };
    }, [focused])
  );

  const playAnimation = () => {
    setShowText(true);
    containerWidth.value = withTiming(100, {
      duration: 100,
      easing: Easing.linear,
    });

    textScale.value = withSequence(
      withTiming(0, {
        duration: 100,
        easing: Easing.linear,
      }),
      withTiming(1, {
        duration: 100,
        easing: Easing.linear,
      })
    );
  };

  return (
    <Animated.View
      style={{
        ...styles(color, focused).container,
        maxWidth: containerWidth.value === 100 ? "100%" : containerWidth,
      }}
    >
      {children}
      {showText && (
        <Animated.Text
          style={{
            ...styles(color, focused).text,
            transform: [{ scale: textScale }],
          }}
        >
          {text}
        </Animated.Text>
      )}
    </Animated.View>
  );
};

export default BottomTabItem;
