import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Pressable,
  Text,
} from "react-native";
import { IconLogo } from "@assets/index";
import { LoginForm } from "@forms/index";

export const Login = ({ navigation }: { navigation: any }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="justify-center flex flex-col items-center bg-zinc-100 dark:text-zinc-100">
        <IconLogo
          width={250}
          height={250}
          className="text-black dark:text-white"
        />
        <LoginForm isLogging navigation={navigation} />

        <View>
          <Text>Pas encore de compte ?</Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text>créer un compte</Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
