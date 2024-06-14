import { IIcon } from "@interfaces/index";
import Svg, { Path } from "react-native-svg";

export const IconOnOff = ({
  width = 24,
  height = 24,
  className = "",
  style,
}: IIcon) => (
  <Svg
    className={className}
    height={height}
    width={width}
    style={style}
    viewBox="0 0 24 24"
  >
    <Path
      fill="currentColor"
      d="M11 12V4q0-.425.288-.712T12 3t.713.288T13 4v8q0 .425-.288.713T12 13t-.712-.288T11 12m1 9q-1.85 0-3.488-.712T5.65 18.35t-1.937-2.863T3 12q0-1.725.638-3.312T5.425 5.85q.275-.3.7-.3t.725.3q.275.275.25.688t-.3.737q-.85.95-1.325 2.163T5 12q0 2.9 2.05 4.95T12 19q2.925 0 4.963-2.05T19 12q0-1.35-.475-2.588t-1.35-2.187q-.275-.3-.288-.7t.263-.675q.3-.3.725-.3t.7.3q1.175 1.25 1.8 2.838T21 12q0 1.85-.712 3.488t-1.925 2.862t-2.85 1.938T12 21"
    />
  </Svg>
);
