import {
  Modal,
  Pressable,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useContext, useEffect, useState } from "react";
import { useColorScheme } from "nativewind";
import { Button } from "../Button";
import { AuthContext } from "@utils/authContext";
import { IconAddTask, IconClose, IconOnOff } from "@assets/index";
import { useMutationCreateCategory } from "@queries/index";
import { setAS } from "@utils/asyncStorage";

interface ISettingsModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export const SettingsModal = ({
  showModal,
  setShowModal,
}: ISettingsModalProps) => {
  const { signOut } = useContext(AuthContext);
  const {
    mutate: createCategory,
    isSuccess: categoryCreated,
    isPending: loadingCategory,
  } = useMutationCreateCategory();

  const [inputCategory, setInputCategory] = useState<string>("");
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const handleCreateCategory = () => {
    if (!!!inputCategory) return;
    createCategory({
      name: inputCategory,
      color: "#84cc16",
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
      <TouchableOpacity
        activeOpacity={1}
        style={{ backgroundColor: "#000000CC" }}
        onPressOut={() => {
          setShowModal(false);
        }}
      >
        <View className="h-full justify-center flex items-center">
          <TouchableWithoutFeedback>
            <View className="bg-white dark:bg-zinc-800 w-[90%] max-w-[400px] h-[300px] flex-col justify-between items-center p-3 rounded-tl-2xl rounded-br-2xl border-[1px] border-zinc-500 dark:border-zinc-600">
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
              <View className="p-2">
                {/* New Category */}
                <View className="flex-row justify-between items-center w-full my-1">
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
                    text="Ajouter"
                    color="#61a146"
                    textColor="white"
                    disabled={!!!inputCategory}
                    loading={loadingCategory}
                    onPress={handleCreateCategory}
                    icon={
                      <IconAddTask
                        className="text-white"
                        width={20}
                        height={20}
                      />
                    }
                  />
                </View>

                {/* Darkmode */}
                <View className="flex-row justify-between items-center w-full my-1">
                  <Text className="dark:text-white font-bold">Mode sombre</Text>
                  <Switch
                    trackColor={{ false: "#767577", true: "#82BD69" }}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={async (isDark) => {
                      toggleColorScheme();
                      try {
                        await setAS("colorScheme", isDark ? "dark" : "light");
                      } catch (error) {
                        console.log("Error while setting dark mode:", error);
                      }
                    }}
                    value={isDarkMode}
                  />
                </View>
              </View>

              {/* Footer */}
              <View className="flex-row justify-end w-full p-2">
                <Button
                  color="#ef4444"
                  text="Se déconnecter"
                  textColor="white"
                  onPress={signOut}
                  icon={
                    <IconOnOff className="text-white" width={20} height={20} />
                  }
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
