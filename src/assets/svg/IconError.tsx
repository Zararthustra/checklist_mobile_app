import { IIcon } from "@interfaces/index";
import { Path, Svg } from "react-native-svg";

export const IconError = ({ size = 24, className = "", color }: IIcon) => (
  <Svg
    className={className}
    fill={color || "currentColor"}
    height={size}
    width={size}
    viewBox="0 0 24 24"
  >
    <Path d="M12 17q.425 0 .713-.288T13 16q0-.425-.288-.713T12 15q-.425 0-.713.288T11 16q0 .425.288.713T12 17Zm-1-4h2V7h-2v6Zm1 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z" />
  </Svg>
);
