import { IIcon } from "@interfaces/index";
import { Path, Svg } from "react-native-svg";

export const IconWarning = ({ size = 24, className = "", color }: IIcon) => (
  <Svg
    className={className}
    fill={color || "currentColor"}
    height={size}
    width={size}
    viewBox="0 0 256 256"
  >
    <Path d="M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.35 24.35 0 0 0 40.55 224h174.9a24.35 24.35 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.72ZM120 104a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0Zm8 88a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z" />
  </Svg>
);
