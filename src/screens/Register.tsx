import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { IconLogo } from "@assets/index";
import { LoginForm } from "@forms/index";

export const Register = ({ navigation }: { navigation: any }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="justify-center flex flex-col items-center bg-zinc-100 dark:text-zinc-100">
        <IconLogo
          width={250}
          height={250}
          className="text-black dark:text-white"
        />
        <LoginForm isLogging={false} navigation={navigation} />
      </View>
    </TouchableWithoutFeedback>
  );
};
