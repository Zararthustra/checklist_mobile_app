import { View } from "react-native";
import { IconLogo } from "@assets/index";

export const SplashScreen = () => {
  return (
    <View className="p-3 dark:bg-zinc-900 items-center justify-center h-full">
      <IconLogo
        width={300}
        height={300}
        className="text-black dark:text-white"
      />
    </View>
  );
};
