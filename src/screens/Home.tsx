import { Button, Text, View } from "react-native";
import { API_URL } from "@env";
import { deleteAS, getAS } from "src/utils/asyncStorage";
import { useContext } from "react";
import { AuthContext } from "@utils/authContext";

export const Home = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <View className="bg-red-500 p-5">
      <Text>{API_URL ?? "None"}</Text>
      <Button title="deco" onPress={signOut} />
      <Button
        title="get"
        onPress={async () => console.log(await getAS("accessToken"))}
      />
    </View>
  );
};
