import { IIcon } from "@interfaces/index";
import Svg, { Path } from "react-native-svg";

export const IconOnOff = ({
  width = 24,
  height = 24,
  className = "",
}: IIcon) => (
  <Svg
    className={className}
    fill="red"
    height={height}
    width={width}
    viewBox="0 0 24 24"
  >
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M13 3a1 1 0 1 0-2 0v9a1 1 0 1 0 2 0V3ZM8.61 5.874a1 1 0 0 0-.971-1.748 9 9 0 1 0 8.862.079 1 1 0 1 0-1.002 1.73 7 7 0 1 1-6.89-.061Z"
      clipRule="evenodd"
    />
  </Svg>
);
