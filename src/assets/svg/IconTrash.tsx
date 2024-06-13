import { IIcon } from "@interfaces/index";
import Svg, { Path } from "react-native-svg";

export const IconTrash = ({ size = 24, className = "", style }: IIcon) => (
  <Svg
    className={className}
    height={size}
    width={size}
    style={style}
    viewBox="0 0 24 24"
  >
    <Path
      fill="currentColor"
      d="M7.616 20q-.667 0-1.141-.475T6 18.386V6h-.5q-.213 0-.356-.144T5 5.499t.144-.356T5.5 5H9q0-.31.23-.54t.54-.23h4.46q.31 0 .54.23T15 5h3.5q.213 0 .356.144t.144.357t-.144.356T18.5 6H18v12.385q0 .666-.475 1.14t-1.14.475zm2.692-3q.213 0 .357-.144t.143-.356v-8q0-.213-.144-.356T10.307 8t-.356.144t-.143.356v8q0 .213.144.356q.144.144.356.144m3.385 0q.213 0 .356-.144t.143-.356v-8q0-.213-.144-.356Q13.904 8 13.692 8q-.213 0-.357.144t-.143.356v8q0 .213.144.356t.357.144"
    />
  </Svg>
);
