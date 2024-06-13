import { ICategory, ITask } from "@interfaces/index";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Pressable,
  ScrollView,
  Dimensions,
  Animated,
} from "react-native";
import { Task } from "./Task";
import { IconHidden, IconOptions, IconVisible } from "@assets/index";
import { OptionsModal } from "./modals/OptionsModal";
import { useState } from "react";

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
  const [showModal, setShowModal] = useState<boolean>(false);
  const dynamicStyle = StyleSheet.create({
    header: {
      backgroundColor: category.color,
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
          outputRange: [0.2, 1, 0.2],
        }),
      }}
    >
      <OptionsModal
        category={category}
        showModal={showModal}
        setShowModal={setShowModal}
      />

      <View style={{ maxHeight: CATEGORY_HEIGHT }}>
        {/* Header */}
        <View
          style={dynamicStyle.header}
          className="flex-row justify-between items-center px-5 py-2 rounded-tl-xl"
        >
          {/* 
          {category.isHidden ? (
            <IconHidden className="text-zinc-800" />
          ) : (
            <IconVisible className="text-zinc-800" />
          )}
           */}
          <View className="w-[24px]"></View>
          <Text className="text-2xl font-bold">{category.name}</Text>
          <Pressable onPress={() => setShowModal(!showModal)}>
            <IconOptions className="text-zinc-800" />
          </Pressable>
        </View>

        {/* Tasks */}
        <ScrollView>
          {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
        </ScrollView>

        {/* Footer */}
        <View style={dynamicStyle.header} className="py-2 rounded-br-xl">
          <Text className=""></Text>
        </View>
      </View>
    </Animated.View>
  );
};
