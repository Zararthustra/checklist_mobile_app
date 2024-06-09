import { Text, View } from "react-native";
import { API_URL } from "@env";

export const Home = () => {
  return (
    <View className="bg-red-500 p-5">
      <Text>{API_URL ?? "None"}</Text>
    </View>
  );
};
