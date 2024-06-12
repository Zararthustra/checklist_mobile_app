import { Button, FlatList, Text, View } from "react-native";
import {
  useQueryRetrieveCategories,
  useQueryRetrieveTasks,
} from "@queries/index";
import { Category, Header } from "@components/index";

export const Home = () => {
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

  if (loadingCategories || loadingTasks)
    return (
      <View className="bg-orange-500 p-5">
        <Header />
        <Text>LOADING</Text>
      </View>
    );

  if (errorCategories || errorTasks || !tasks)
    return (
      <View className="bg-red-500 p-5">
        <Header />
        <Text>NO DATA</Text>
      </View>
    );

  return (
    <View className="flex-1 p-3 dark:bg-zinc-900">
      <Header />
      <FlatList
        contentContainerStyle={{ gap: 10 }}
        initialNumToRender={2}
        data={categories}
        renderItem={({ item }) => (
          <Category
            category={item}
            tasks={tasks?.filter((task) => item.id === task.category)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
