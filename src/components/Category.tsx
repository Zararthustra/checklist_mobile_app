import { ICategory, ITask } from "@interfaces/index";
import { FlatList, Text, View, StyleSheet, Pressable } from "react-native";
import { Task } from "./Task";
import { IconHidden, IconOptions, IconVisible } from "@assets/index";
import { OptionsModal } from "./modals/OptionsModal";
import { useState } from "react";

interface ICategoryProps {
  category: ICategory;
  tasks: ITask[] | undefined;
}

export const Category = ({ category, tasks }: ICategoryProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const dynamicStyle = StyleSheet.create({
    header: {
      backgroundColor: category.color,
    },
  });

  return (
    <View className="">
      <OptionsModal
        category={category}
        showModal={showModal}
        setShowModal={setShowModal}
      />

      {/* Header */}
      <View
        style={dynamicStyle.header}
        className="flex-row justify-between items-center px-5 py-2 rounded-tl-xl"
      >
        {category.isHidden ? (
          <IconHidden className="text-zinc-800" />
        ) : (
          <IconVisible className="text-zinc-800" />
        )}
        <Text className="text-2xl font-bold">{category.name}</Text>
        <Pressable onPress={() => setShowModal(!showModal)}>
          <IconOptions className="text-zinc-800" />
        </Pressable>
      </View>

      {/* Tasks */}
      {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}

      {/* Footer */}
      <View style={dynamicStyle.header} className="py-2 rounded-br-xl">
        <Text className=""></Text>
      </View>
    </View>
  );
};
