import { IIcon } from "@interfaces/index";
import Svg, { Path } from "react-native-svg";

export const IconOptions = ({
  width = 24,
  height = 24,
  className = "",
  style,
  color,
}: IIcon) => (
  <Svg
    width={width}
    height={height}
    className={className}
    style={style}
    viewBox="0 0 24 24"
  >
    <Path
      fill={color ?? "currentColor"}
      d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0-6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"
    ></Path>
  </Svg>
);
