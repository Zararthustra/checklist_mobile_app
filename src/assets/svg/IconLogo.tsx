import { IIcon } from "@interfaces/index";
import Svg, {
  Rect,
  Path,
  G,
  Stop,
  LinearGradient,
  ClipPath,
  Defs,
} from "react-native-svg";

export const IconLogo = ({
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
    fill={color ?? "#f4f4f5"}
    viewBox="0 0 192 192"
  >
    <G clipPath="url(#clip0_464_52)">
      <Rect width="192" height="192" fill="#f4f4f5" />
      <Path
        d="M31.6543 96.6836C29.125 96.6836 26.8122 96.0456 24.7158 94.7695C22.6423 93.4935 20.9902 91.7845 19.7598 89.6426C18.5521 87.4779 17.9482 85.0739 17.9482 82.4307L18.0166 60.5898C18.0166 57.9922 18.609 55.6452 19.7939 53.5488C20.9788 51.4297 22.6081 49.7321 24.6816 48.4561C26.778 47.1572 29.1022 46.5078 31.6543 46.5078C34.252 46.5078 36.5648 47.1344 38.5928 48.3877C40.6436 49.641 42.2728 51.3385 43.4805 53.4805C44.7109 55.5996 45.3262 57.9694 45.3262 60.5898V63.8027C45.3262 63.985 45.235 64.0762 45.0527 64.0762H37.1914C37.0091 64.0762 36.918 63.985 36.918 63.8027V60.5898C36.918 59.0404 36.4167 57.7074 35.4141 56.5908C34.4115 55.4743 33.1582 54.916 31.6543 54.916C29.9909 54.916 28.7148 55.4857 27.8262 56.625C26.9375 57.7643 26.4932 59.0859 26.4932 60.5898V82.4307C26.4932 84.1396 26.9945 85.541 27.9971 86.6348C28.9997 87.7057 30.2188 88.2412 31.6543 88.2412C33.1582 88.2412 34.4115 87.6488 35.4141 86.4639C36.4167 85.2562 36.918 83.9118 36.918 82.4307V79.1836C36.918 79.0013 37.0091 78.9102 37.1914 78.9102H45.1211C45.3034 78.9102 45.3945 79.0013 45.3945 79.1836V82.4307C45.3945 85.0511 44.7793 87.4437 43.5488 89.6084C42.2956 91.7503 40.6436 93.4707 38.5928 94.7695C36.542 96.0456 34.2292 96.6836 31.6543 96.6836ZM58.6904 96H50.7607C50.5785 96 50.4873 95.8861 50.4873 95.6582L50.5557 47.5674C50.5557 47.3851 50.6696 47.2939 50.8975 47.2939H58.6904C58.9183 47.2939 59.0322 47.3851 59.0322 47.5674L58.9639 66.6055H69.457V47.5674C69.457 47.3851 69.5482 47.2939 69.7305 47.2939H77.5234C77.7513 47.2939 77.8652 47.3851 77.8652 47.5674L78.002 95.6582C78.002 95.8861 77.888 96 77.6602 96H69.7988C69.571 96 69.457 95.8861 69.457 95.6582V75.082H58.9639V95.6582C58.9639 95.8861 58.8727 96 58.6904 96ZM106.61 96H83.9834C83.8011 96 83.71 95.8861 83.71 95.6582L83.7783 47.5674C83.7783 47.3851 83.8695 47.2939 84.0518 47.2939H106.542C106.724 47.2939 106.815 47.4079 106.815 47.6357V55.4629C106.815 55.6452 106.724 55.7363 106.542 55.7363H92.1865V66.6738H106.542C106.724 66.6738 106.815 66.765 106.815 66.9473L106.884 74.877C106.884 75.0592 106.793 75.1504 106.61 75.1504H92.1865V87.3867H106.61C106.793 87.3867 106.884 87.5007 106.884 87.7285V95.7266C106.884 95.9089 106.793 96 106.61 96ZM125.99 96.6836C123.461 96.6836 121.148 96.0456 119.052 94.7695C116.978 93.4935 115.326 91.7845 114.096 89.6426C112.888 87.4779 112.284 85.0739 112.284 82.4307L112.353 60.5898C112.353 57.9922 112.945 55.6452 114.13 53.5488C115.315 51.4297 116.944 49.7321 119.018 48.4561C121.114 47.1572 123.438 46.5078 125.99 46.5078C128.588 46.5078 130.901 47.1344 132.929 48.3877C134.979 49.641 136.609 51.3385 137.816 53.4805C139.047 55.5996 139.662 57.9694 139.662 60.5898V63.8027C139.662 63.985 139.571 64.0762 139.389 64.0762H131.527C131.345 64.0762 131.254 63.985 131.254 63.8027V60.5898C131.254 59.0404 130.753 57.7074 129.75 56.5908C128.747 55.4743 127.494 54.916 125.99 54.916C124.327 54.916 123.051 55.4857 122.162 56.625C121.273 57.7643 120.829 59.0859 120.829 60.5898V82.4307C120.829 84.1396 121.33 85.541 122.333 86.6348C123.336 87.7057 124.555 88.2412 125.99 88.2412C127.494 88.2412 128.747 87.6488 129.75 86.4639C130.753 85.2562 131.254 83.9118 131.254 82.4307V79.1836C131.254 79.0013 131.345 78.9102 131.527 78.9102H139.457C139.639 78.9102 139.73 79.0013 139.73 79.1836V82.4307C139.73 85.0511 139.115 87.4437 137.885 89.6084C136.632 91.7503 134.979 93.4707 132.929 94.7695C130.878 96.0456 128.565 96.6836 125.99 96.6836ZM153.026 96H145.097C144.914 96 144.823 95.8861 144.823 95.6582L144.96 47.6357C144.96 47.4079 145.051 47.2939 145.233 47.2939H153.095C153.277 47.2939 153.368 47.4079 153.368 47.6357V64.2129L164.34 47.5674C164.522 47.3851 164.693 47.2939 164.853 47.2939H172.885C173.09 47.2939 173.135 47.3851 173.021 47.5674L160.922 66.8789L174.491 95.7266C174.605 95.9089 174.491 96 174.149 96H165.604C165.377 96 165.24 95.9089 165.194 95.7266L155.727 75.1504L153.3 78.9785V95.6582C153.3 95.8861 153.209 96 153.026 96Z"
        fill="#27272A"
      />
      <Path
        d="M91.6689 150L69.042 150C68.8597 150 68.7686 149.886 68.7686 149.658L68.8369 101.636C68.8369 101.408 68.9508 101.294 69.1787 101.294L76.9717 101.294C77.1995 101.294 77.3135 101.408 77.3135 101.636L77.2451 141.387L91.6689 141.387C91.8968 141.387 92.0107 141.501 92.0107 141.729L92.0107 149.658C92.0107 149.886 91.8968 150 91.6689 150ZM106.612 150L98.6826 150C98.4548 150 98.3408 149.886 98.3408 149.658L98.4092 101.567C98.4092 101.385 98.5003 101.294 98.6826 101.294L106.544 101.294C106.726 101.294 106.817 101.385 106.817 101.567L106.886 149.658C106.886 149.886 106.795 150 106.612 150ZM126.683 150.684C124.199 150.684 121.909 150.046 119.813 148.77C117.739 147.493 116.076 145.796 114.822 143.677C113.592 141.535 112.977 139.188 112.977 136.636L112.977 133.423C112.977 133.172 113.09 133.047 113.318 133.047L121.18 133.047C121.362 133.047 121.453 133.172 121.453 133.423L121.453 136.636C121.453 138.162 121.966 139.484 122.991 140.601C124.017 141.694 125.247 142.241 126.683 142.241C128.141 142.241 129.383 141.683 130.408 140.566C131.434 139.427 131.946 138.117 131.946 136.636C131.946 134.927 130.83 133.434 128.597 132.158C128.232 131.93 127.754 131.657 127.161 131.338C126.591 130.996 125.908 130.609 125.11 130.176C124.313 129.743 123.538 129.321 122.786 128.911C122.034 128.478 121.305 128.068 120.599 127.681C118.047 126.177 116.144 124.297 114.891 122.041C113.66 119.762 113.045 117.21 113.045 114.385C113.045 111.787 113.683 109.44 114.959 107.344C116.235 105.27 117.898 103.63 119.949 102.422C122.023 101.191 124.267 100.576 126.683 100.576C129.166 100.576 131.445 101.191 133.519 102.422C135.592 103.675 137.244 105.339 138.475 107.412C139.728 109.486 140.354 111.81 140.354 114.385L140.354 120.127C140.354 120.309 140.263 120.4 140.081 120.4L132.22 120.4C132.037 120.4 131.946 120.309 131.946 120.127L131.878 114.385C131.878 112.744 131.365 111.411 130.34 110.386C129.314 109.36 128.095 108.848 126.683 108.848C125.247 108.848 124.017 109.395 122.991 110.488C121.966 111.582 121.453 112.881 121.453 114.385C121.453 115.911 121.772 117.187 122.41 118.213C123.071 119.238 124.267 120.218 125.999 121.152C126.181 121.243 126.603 121.471 127.264 121.836C127.924 122.201 128.654 122.611 129.451 123.066C130.271 123.499 131.012 123.898 131.673 124.263C132.334 124.604 132.732 124.81 132.869 124.878C135.193 126.177 137.028 127.772 138.372 129.663C139.739 131.554 140.423 133.879 140.423 136.636C140.423 139.302 139.808 141.694 138.577 143.813C137.324 145.933 135.66 147.607 133.587 148.838C131.513 150.068 129.212 150.684 126.683 150.684ZM161.963 150L154.067 150C153.862 150 153.76 149.886 153.76 149.658L153.76 109.736L144.668 109.736C144.44 109.736 144.326 109.622 144.326 109.395L144.395 101.567C144.395 101.385 144.486 101.294 144.668 101.294L171.26 101.294C171.51 101.294 171.636 101.385 171.636 101.567L171.636 109.395C171.636 109.622 171.545 109.736 171.362 109.736L162.168 109.736L162.236 149.658C162.236 149.886 162.145 150 161.963 150Z"
        fill="#27272A"
      />
      <Path
        d="M117.801 138.359L107.711 127.167L102.666 121.57L100.143 118.772L97.621 115.974L97.588 104.031L99.0943 105.788L101.546 108.586L106.449 114.182L116.256 125.374L167.325 41.4011L174.515 45.0363L117.801 138.359Z"
        fill="url(#paint0_linear_464_52)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_464_52"
        x1="151.267"
        y1="54.8558"
        x2="99.3734"
        y2="127.315"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#82BD69" />
        <Stop offset="0.36" stopColor="#82BD69" />
        <Stop offset="0.475" stopColor="#f4f4f5" />
        <Stop offset="0.54" stopColor="#f4f4f5" stopOpacity="0" />
        <Stop offset="0.69" stopColor="#f4f4f5" stopOpacity="0" />
        <Stop offset="0.745" stopColor="#f4f4f5" />
        <Stop offset="0.95" stopColor="#f4f4f5" />
      </LinearGradient>
      <ClipPath id="clip0_464_52">
        <Rect width="192" height="192" fill="#f4f4f5" />
      </ClipPath>
    </Defs>
  </Svg>
);
