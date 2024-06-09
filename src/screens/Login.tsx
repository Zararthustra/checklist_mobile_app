import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { IconLogo } from "@assets/index";
import { LoginForm } from "@forms/index";

export const Login = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="justify-center flex flex-col items-center bg-zinc-100 dark:text-zinc-100">
        <IconLogo width={250} height={250} />
        <LoginForm />
      </View>
    </TouchableWithoutFeedback>
  );
};
