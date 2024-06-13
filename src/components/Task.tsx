import { useState } from "react";
import { View } from "react-native";
import { useColorScheme } from "nativewind";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { IconLoader, IconTrash } from "@assets/index";
import { useMutationDeleteTask, useMutationUpdateTask } from "@queries/index";
import { ITask } from "@interfaces/index";

interface ITaskProps {
  task: ITask;
  color: string;
}
export const Task = ({ task: { id, name, isDisabled }, color }: ITaskProps) => {
  const { colorScheme } = useColorScheme();
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const { mutate: deleteTask, isPending: loadingDelete } =
    useMutationDeleteTask();
  const { mutate: checkTask, isPending: loadingCheck } =
    useMutationUpdateTask();

  return (
    <View className="py-[4px] px-4">
      {isDeleting ? (
        <BouncyCheckbox
          size={25}
          fillColor="transparent"
          unFillColor="transparent"
          text={"Supprimer " + name + " ?"}
          onPress={(isChecked: boolean) => {
            deleteTask(id);
          }}
          iconComponent={
            loadingDelete ? (
              <IconLoader style={{ color }} />
            ) : (
              <IconTrash size={30} className="text-red-500" />
            )
          }
          onLongPress={() => setIsDeleting(false)}
        />
      ) : (
        <BouncyCheckbox
          size={25}
          isChecked={isDisabled}
          fillColor={loadingCheck ? "transparent" : color}
          unFillColor="transparent"
          text={name}
          textStyle={{ color: colorScheme === "dark" ? "#fff" : "#000" }}
          innerIconStyle={{ borderWidth: loadingCheck ? 0 : 2 }}
          onPress={(isChecked: boolean) => {
            checkTask({ isDisabled: isChecked, id });
          }}
          iconComponent={loadingCheck && <IconLoader style={{ color }} />}
          onLongPress={() => setIsDeleting(true)}
        />
      )}
    </View>
  );
};
