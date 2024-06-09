import { useEffect, useState } from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { IconLogo } from "@assets/index";
import { LoginForm } from "@forms/index";
import { getAS } from "@utils/asyncStorage";

export const Login = ({ navigation }: { navigation: any }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const isFocused = useIsFocused();

  // Redirect if already logged
  useEffect(() => {
    if (isFocused) {
      getAS("accessToken")
        .then((value) => {
          setAccessToken(value);
        })
        .catch((err) => console.log("AS error: ", err));

      if (!!accessToken) navigation.navigate("Home");
    }
  }, [accessToken, isFocused]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="justify-center flex flex-col items-center bg-zinc-100 dark:text-zinc-100">
        <IconLogo width={250} height={250} />
        <LoginForm navigation={navigation} />
      </View>
    </TouchableWithoutFeedback>
  );
};
