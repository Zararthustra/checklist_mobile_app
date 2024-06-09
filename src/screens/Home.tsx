import { Button, Text, View } from "react-native";
import { API_URL } from "@env";
import { deleteAS, getAS } from "src/utils/asyncStorage";

export const Home = () => {
  return (
    <View className="bg-red-500 p-5">
      <Text>{API_URL ?? "None"}</Text>
      <Button
        title="delete"
        onPress={async () => await deleteAS("accessToken")}
      />
      <Button
        title="get"
        onPress={async () => console.log(await getAS("accessToken"))}
      />
    </View>
  );
};
