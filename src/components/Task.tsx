import { ITask } from "@interfaces/index";
import { Text, View } from "react-native";

interface ITaskProps {
  task: ITask;
}
export const Task = ({ task: { name } }: ITaskProps) => {
  return (
    <View className="border-[1px] py-2 my-[2px]">
      <Text className="font-bold text-center">{name}</Text>
    </View>
  );
};
