import {
  Button,
  Modal,
  Pressable,
  Switch,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@utils/authContext";
import { IconClose } from "src/assets";
import { useColorScheme } from "nativewind";
import { useMutationCreateCategory } from "src/queries";

interface ISettingsModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export const SettingsModal = ({
  showModal,
  setShowModal,
}: ISettingsModalProps) => {
  const { signOut } = useContext(AuthContext);
  const { mutate: createCategory, isSuccess: categoryCreated } =
    useMutationCreateCategory();

  const [inputCategory, setInputCategory] = useState<string>("");
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const handleCreateCategory = () => {
    if (!!!inputCategory) return;
    createCategory({
      name: inputCategory,
      color: "#f0f",
    });
    setInputCategory("");
  };

  useEffect(() => {
    if (categoryCreated) setShowModal(false);
  }, [categoryCreated]);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showModal}
      onRequestClose={() => setShowModal(false)}
    >
      {/* <TouchableWithoutFeedback onPress={() => setShowModal(false)}> */}
      <View className="h-full justify-center flex items-center">
        <View className="bg-zinc-100 dark:bg-zinc-900 w-[90%] max-w-[400px] h-[600px] flex-col justify-between items-center p-3 rounded-tl-2xl rounded-br-2xl border-[1px] border-zinc-500 dark:border-zinc-600">
          {/* Header */}
          <View className="flex-row justify-between items-center w-full">
            <Text className="text-2xl dark:text-white font-bold pl-4">
              Paramètres
            </Text>
            <Pressable onPress={() => setShowModal(false)}>
              <IconClose className="text-zinc-800 dark:text-zinc-100" />
            </Pressable>
          </View>

          {/* Body */}
          <View>
            {/* New Category */}
            <View className="flex-row justify-between items-center w-full">
              <TextInput
                onChangeText={setInputCategory}
                value={inputCategory}
                clearButtonMode="always"
                placeholder="Nouvelle catégorie"
                placeholderTextColor="#b0b0b0"
                className="border-zinc-300 dark:text-white dark:border-zinc-700 border-[1px] px-2 rounded-sm"
                onSubmitEditing={handleCreateCategory}
              />
              <Button
                title="Ajouter"
                color="green"
                onPress={handleCreateCategory}
              />
            </View>

            {/* Darkmode */}
            <View className="flex-row justify-between items-center w-full">
              <Text className="dark:text-white">Mode sombre</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#82BD69" }}
                thumbColor={"#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleColorScheme}
                value={isDarkMode}
              />
            </View>
          </View>

          {/* Footer */}
          <View>
            <Button color="red" title="deconnexion" onPress={signOut} />
          </View>
        </View>
      </View>
      {/* </TouchableWithoutFeedback> */}
    </Modal>
  );
};
