import { ITask } from "@interfaces/index";
import { Text, View } from "react-native";

interface ITaskProps {
  task: ITask;
}
export const Task = ({ task: { name } }: ITaskProps) => {
  return (
    <View className="border-[1px] py-2 my-[2px] dark:border-zinc-600 rounded-sm">
      <Text className="font-bold text-center dark:text-white">{name}</Text>
    </View>
  );
};
