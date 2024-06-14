import { useCallback, useRef } from "react";
import { Animated, Dimensions, FlatList, Text, View } from "react-native";
import {
  useQueryRetrieveCategories,
  useQueryRetrieveTasks,
} from "@queries/index";
import { Category, Header } from "@components/index";
import { ICategory } from "@interfaces/index";
import { IconLoader } from "src/assets";
import { useColorScheme } from "nativewind";

// Globals
const { width, height } = Dimensions.get("window");

const CATEGORY_HEIGHT = height * 0.82;
const CATEGORY_WIDTH = width > 400 ? width * 0.55 : width * 0.85;

export const Home = () => {
  const { colorScheme } = useColorScheme();
  const {
    data: categories,
    error: errorCategories,
    isLoading: loadingCategories,
  } = useQueryRetrieveCategories();
  const {
    data: tasks,
    error: errorTasks,
    isLoading: loadingTasks,
  } = useQueryRetrieveTasks();
  const scrollX = useRef(new Animated.Value(0)).current;

  // Using an arrow function inline on Flatlist
  // re-creates the function on every re-render
  // causing performance issue => better useCallback
  const renderItem = useCallback(
    ({ item, index }: any) => (
      <Category
        category={item}
        tasks={tasks?.filter((task) => item.id === task.category)}
        index={index}
        scrollX={scrollX}
        CATEGORY_HEIGHT={CATEGORY_HEIGHT}
        CATEGORY_WIDTH={CATEGORY_WIDTH}
      />
    ),
    [tasks]
  );
  const keyExtractor = useCallback((item: ICategory) => item.id.toString(), []);

  if (loadingCategories || loadingTasks)
    return (
      <View className="p-3 dark:bg-zinc-900 h-full">
        <Header />
        <View className="items-center justify-center h-full">
          <IconLoader
            width={150}
            height={150}
            color={colorScheme === "dark" ? "white" : "black"}
          />
          <Text className="text-2xl font-bold mt-5 italic dark:text-white">
            Chargement de la checklist...
          </Text>
        </View>
      </View>
    );

  if (errorCategories || errorTasks || !tasks)
    return (
      <View className="p-3 dark:bg-zinc-900 h-full">
        <Header />
        <View className="items-center justify-center h-full">
          <Text className="text-2xl font-bold italic dark:text-white text-center">
            Une erreur est survenue lors de la récupération des données,
            veuillez réessayer plus tard.
          </Text>
        </View>
      </View>
    );

  return (
    <View className="p-3 dark:bg-zinc-900 h-full">
      <Header />
      <Animated.FlatList
        // initialNumToRender={2}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        data={[
          {
            id: "left",
            name: "left",
            color: "string",
            text_color: "black" as "black",
            isHidden: false,
            isRecurrent: false,
            owner: 1,
          },
          ...(categories as ICategory[]),
          {
            id: "right",
            name: "right",
            color: "string",
            text_color: "black" as "black",
            isHidden: false,
            isRecurrent: false,
            owner: 1,
          },
        ]}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={
          {
            // alignItems: "center",
          }
        }
        horizontal
        snapToInterval={CATEGORY_WIDTH}
        decelerationRate={"fast"}
        scrollEventThrottle={16}
        bounces={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
