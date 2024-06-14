import { IIcon } from "@interfaces/index";
import Svg, { Path } from "react-native-svg";

export const IconAddTask = ({
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
    viewBox="0 0 40 40"
  >
    <Path
      d="M5.83337 12.5C5.13893 12.5 4.54893 12.2567 4.06337 11.77C3.57671 11.2844 3.33337 10.6944 3.33337 10C3.33337 9.30556 3.57671 8.71556 4.06337 8.23C4.54893 7.74333 5.13893 7.5 5.83337 7.5C6.52782 7.5 7.11782 7.74333 7.60337 8.23C8.09004 8.71556 8.33337 9.30556 8.33337 10C8.33337 10.6944 8.09004 11.2844 7.60337 11.77C7.11782 12.2567 6.52782 12.5 5.83337 12.5ZM5.83337 22.5C5.13893 22.5 4.54893 22.2567 4.06337 21.77C3.57671 21.2844 3.33337 20.6944 3.33337 20C3.33337 19.3056 3.57671 18.7156 4.06337 18.23C4.54893 17.7433 5.13893 17.5 5.83337 17.5C6.52782 17.5 7.11782 17.7433 7.60337 18.23C8.09004 18.7156 8.33337 19.3056 8.33337 20C8.33337 20.6944 8.09004 21.2844 7.60337 21.77C7.11782 22.2567 6.52782 22.5 5.83337 22.5ZM5.83337 32.5C5.13893 32.5 4.54893 32.2567 4.06337 31.77C3.57671 31.2844 3.33337 30.6944 3.33337 30C3.33337 29.3056 3.57671 28.7156 4.06337 28.23C4.54893 27.7433 5.13893 27.5 5.83337 27.5C6.52782 27.5 7.11782 27.7433 7.60337 28.23C8.09004 28.7156 8.33337 29.3056 8.33337 30C8.33337 30.6944 8.09004 31.2844 7.60337 31.77C7.11782 32.2567 6.52782 32.5 5.83337 32.5ZM13.3334 11.6667C12.8612 11.6667 12.465 11.5072 12.145 11.1883C11.8262 10.8683 11.6667 10.4722 11.6667 10C11.6667 9.52778 11.8262 9.13167 12.145 8.81167C12.465 8.49278 12.8612 8.33333 13.3334 8.33333H33.3334V11.6667H13.3334ZM13.3334 21.6667C12.8612 21.6667 12.465 21.5067 12.145 21.1867C11.8262 20.8678 11.6667 20.4722 11.6667 20C11.6667 19.5278 11.8262 19.1317 12.145 18.8117C12.465 18.4928 12.8612 18.3333 13.3334 18.3333H30C28.4167 18.3333 26.9306 18.6317 25.5417 19.2283C24.1528 19.8261 22.9306 20.6389 21.875 21.6667H13.3334ZM18.4584 31.6667H13.3334C12.8612 31.6667 12.465 31.5067 12.145 31.1867C11.8262 30.8678 11.6667 30.4722 11.6667 30C11.6667 29.5278 11.8262 29.1322 12.145 28.8133C12.465 28.4933 12.8612 28.3333 13.3334 28.3333H18.4584C18.375 28.8889 18.3334 29.4444 18.3334 30C18.3334 30.5556 18.375 31.1111 18.4584 31.6667ZM30 38.3333C27.6945 38.3333 25.7295 37.5211 24.105 35.8967C22.4795 34.2711 21.6667 32.3056 21.6667 30C21.6667 27.6944 22.4795 25.7289 24.105 24.1033C25.7295 22.4789 27.6945 21.6667 30 21.6667C32.3056 21.6667 34.2712 22.4789 35.8967 24.1033C37.5212 25.7289 38.3334 27.6944 38.3334 30C38.3334 32.3056 37.5212 34.2711 35.8967 35.8967C34.2712 37.5211 32.3056 38.3333 30 38.3333ZM29.1667 30.8333V34.1667C29.1667 34.3889 29.25 34.5833 29.4167 34.75C29.5834 34.9167 29.7778 35 30 35C30.2223 35 30.4167 34.9167 30.5834 34.75C30.75 34.5833 30.8334 34.3889 30.8334 34.1667V30.8333H34.1667C34.3889 30.8333 34.5834 30.75 34.75 30.5833C34.9167 30.4167 35 30.2222 35 30C35 29.7778 34.9167 29.5833 34.75 29.4167C34.5834 29.25 34.3889 29.1667 34.1667 29.1667H30.8334V25.8333C30.8334 25.6111 30.75 25.4167 30.5834 25.25C30.4167 25.0833 30.2223 25 30 25C29.7778 25 29.5834 25.0833 29.4167 25.25C29.25 25.4167 29.1667 25.6111 29.1667 25.8333V29.1667H25.8334C25.6112 29.1667 25.4167 29.25 25.25 29.4167C25.0834 29.5833 25 29.7778 25 30C25 30.2222 25.0834 30.4167 25.25 30.5833C25.4167 30.75 25.6112 30.8333 25.8334 30.8333H29.1667Z"
      fill={color ?? "currentColor"}
    />
  </Svg>
);
