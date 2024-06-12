import { IIcon } from "@interfaces/index";
import Svg, { Path } from "react-native-svg";

export const IconClose = ({ size = 32, className = "", style }: IIcon) => (
  <Svg
    width={size}
    height={size}
    style={style}
    fill="currentColor"
    viewBox="0 0 24 24"
    className={className}
  >
    <Path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-3.4 14L12 13.4L8.4 17L7 15.6l3.6-3.6L7 8.4L8.4 7l3.6 3.6L15.6 7L17 8.4L13.4 12l3.6 3.6l-1.4 1.4Z" />
  </Svg>
);
