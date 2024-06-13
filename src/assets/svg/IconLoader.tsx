import { IIcon } from "@interfaces/index";
import { Animated, Easing } from "react-native";
import Svg, { Path } from "react-native-svg";

export const IconLoader = ({
  width = 24,
  height = 24,
  className = "",
  color,
  style,
}: IIcon) => {
  const spinValue = new Animated.Value(0);
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.View
      style={{
        transform: [{ rotate: spin }],
      }}
    >
      <Svg
        width={width}
        height={height}
        className={className}
        style={style}
        viewBox={"0 0 24 24"}
        fill="none"
      >
        <Path
          fill="none"
          stroke={color ? color : "currentColor"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 3a9 9 0 1 0 9 9"
        />
      </Svg>
    </Animated.View>
  );
};
