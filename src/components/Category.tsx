import {
  Text,
  View,
  StyleSheet,
  Pressable,
  ScrollView,
  Dimensions,
  Animated,
  TextInput,
} from "react-native";
import { useState } from "react";
import { useToast } from "react-native-toast-notifications";
import { Task } from "./Task";
import { OptionsModal } from "./modals/OptionsModal";
import { IconAddTask, IconLoader, IconOptions } from "@assets/index";
import { ICategory, ITask } from "@interfaces/index";
import { useMutationCreateTask } from "@queries/index";

interface ICategoryProps {
  category: ICategory;
  tasks: ITask[] | undefined;
  index: number;
  CATEGORY_HEIGHT: number;
  CATEGORY_WIDTH: number;
  scrollX: Animated.Value;
}

export const Category = ({
  category,
  tasks,
  index,
  scrollX,
  CATEGORY_HEIGHT,
  CATEGORY_WIDTH,
}: ICategoryProps) => {
  const toast = useToast();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [inputTask, setInputTask] = useState<string>("");
  const { mutate: createTask, isPending: loadingTask } =
    useMutationCreateTask();

  const handleCreateTask = () => {
    if (!!!inputTask) {
      toast.show("Veuillez entrer un élément", {
        type: "warning",
      });
      return;
    }
    createTask({
      name: inputTask,
      categoryId: category.id,
    });
    setInputTask("");
  };

  const dynamicStyle = StyleSheet.create({
    header: {
      backgroundColor: category.color,
      borderColor: category.color,
    },
  });

  const { width } = Dimensions.get("window");
  const categoriesGap = 5;
  const inputRange = [
    (index - 2) * CATEGORY_WIDTH,
    (index - 1) * CATEGORY_WIDTH,
    index * CATEGORY_WIDTH,
  ];

  // Extreme side items
  if (["left", "right"].includes(category.name)) {
    return (
      <View
        style={{ width: (width - CATEGORY_WIDTH) / 2 - categoriesGap * 2 }}
      />
    );
  }

  return (
    <Animated.View
      style={{
        width: CATEGORY_WIDTH - categoriesGap * 2,
        height: CATEGORY_HEIGHT,
        marginHorizontal: categoriesGap,
        transform: [
          {
            translateY: scrollX.interpolate({
              inputRange,
              outputRange: [100, 0, 100],
            }),
          },
        ],
        opacity: scrollX.interpolate({
          inputRange,
          outputRange: [0.4, 1, 0.4],
        }),
      }}
    >
      <OptionsModal
        category={category}
        showModal={showModal}
        setShowModal={setShowModal}
        tasks={tasks}
      />

      <View style={{ maxHeight: CATEGORY_HEIGHT }}>
        {/* Header */}
        <View
          style={dynamicStyle.header}
          className="flex-row justify-between items-center px-4 py-4 rounded-tl-xl"
        >
          {/* 
          {category.isHidden ? (
            <IconHidden className="text-zinc-800" />
          ) : (
            <IconVisible className="text-zinc-800" />
          )}
           */}
          <View className="w-[24px]"></View>
          <Text
            className="text-2xl font-bold"
            style={{ color: category.text_color }}
          >
            {category.name}
          </Text>
          <Pressable onPress={() => setShowModal(!showModal)}>
            <IconOptions color={category.text_color} width={32} height={32} />
          </Pressable>
        </View>

        {/* Tasks */}
        <ScrollView
          className="bg-white dark:bg-zinc-800 border-l-[2px] border-r-[2px]"
          style={{
            borderColor: category.color,
          }}
        >
          {!!!inputTask && (
            <View
              style={{
                paddingVertical: !!tasks?.length ? 12 : 0,
              }}
            >
              {!!tasks &&
                tasks.map((task) => (
                  <Task key={task.id} task={task} color={category.color} />
                ))}
            </View>
          )}
        </ScrollView>

        {/* Footer */}
        <View
          style={dynamicStyle.header}
          className="flex-row items-center justify-between rounded-br-xl border-[2px] pr-3"
        >
          <TextInput
            onChangeText={setInputTask}
            value={inputTask}
            clearButtonMode="always"
            placeholder="Nouvel élément"
            placeholderTextColor="#b0b0b0"
            onSubmitEditing={handleCreateTask}
            className="dark:text-white bg-white dark:bg-zinc-800 px-2 py-2 w-[85%]"
          />
          <Pressable onPress={handleCreateTask}>
            {loadingTask ? (
              <IconLoader color={category.text_color} />
            ) : (
              <IconAddTask color={category.text_color} width={30} height={30} />
            )}
          </Pressable>
        </View>
      </View>
    </Animated.View>
  );
};
