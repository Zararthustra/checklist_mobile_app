import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  Text,
} from "react-native";
import { IconLogo } from "@assets/index";
import { LoginForm } from "@forms/index";

export const Login = ({ navigation }: { navigation: any }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="justify-center flex flex-col items-center bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-100 h-full">
        <IconLogo
          width={250}
          height={250}
          className="text-black dark:text-white"
        />
        <LoginForm isLogging navigation={navigation} />

        <View className="items-center mt-5">
          <Text className="text-xs text-zinc-400">Pas encore de compte ?</Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text className="underline text-zinc-700 dark:text-zinc-200 font-bold">
              Créer un compte
            </Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
