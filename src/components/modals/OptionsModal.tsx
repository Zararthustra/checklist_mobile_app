import { useState, useEffect } from "react";
import {
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { IconClose, IconEdit, IconTrash } from "@assets/index";
import { ICategory } from "@interfaces/index";
import {
  useMutationDeleteCategory,
  useMutationUpdateCategory,
} from "@queries/index";
import { Button } from "../Button";

interface IOptionsModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  category: ICategory;
}
export const OptionsModal = ({
  showModal,
  setShowModal,
  category,
}: IOptionsModalProps) => {
  const [inputCategory, setInputCategory] = useState<string>("");
  const {
    mutate: deleteCategory,
    isSuccess: categoryDeleted,
    isPending: loadingDelete,
  } = useMutationDeleteCategory();
  const {
    mutate: updateCategory,
    isSuccess: categoryUpdated,
    isPending: loadingUpdate,
  } = useMutationUpdateCategory();

  const handleRenameCategory = () => {
    if (!!!inputCategory) return;

    updateCategory({
      payload: {
        name: inputCategory,
      },
      id: category.id,
    });
    setInputCategory("");
  };

  const handleDeleteCategory = () => {
    deleteCategory(category.id);
  };

  useEffect(() => {
    if (categoryDeleted) setShowModal(false);
  }, [categoryDeleted]);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showModal}
      onRequestClose={() => setShowModal(false)}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPressOut={() => {
          setShowModal(false);
        }}
      >
        <View className="h-full justify-center flex items-center bg-black opacity-90">
          <TouchableWithoutFeedback>
            <View className="bg-white dark:bg-zinc-800 w-[90%] max-w-[400px] h-[500px] flex-col justify-between items-center p-2 rounded-tl-2xl rounded-br-2xl">
              {/* Header */}
              <View className="flex-row justify-between w-full">
                <Text className="text-2xl dark:text-white font-bold pl-4">
                  {category.name}
                </Text>
                <Pressable onPress={() => setShowModal(false)}>
                  <IconClose className="text-zinc-800" />
                </Pressable>
              </View>

              {/* Body */}
              <View className="p-2">
                {/* Rename Category */}
                <View className="flex-row justify-between items-center w-full my-1">
                  <TextInput
                    onChangeText={setInputCategory}
                    value={inputCategory}
                    clearButtonMode="always"
                    placeholder={category.name}
                    placeholderTextColor="#b0b0b0"
                    className="w-[150px] border-zinc-300 dark:text-white dark:border-zinc-700 border-[1px] px-2 rounded-sm"
                    onSubmitEditing={handleRenameCategory}
                  />
                  <Button
                    text="Renommer"
                    color="#61a146"
                    textColor="white"
                    disabled={!!!inputCategory}
                    loading={loadingUpdate}
                    onPress={handleRenameCategory}
                    icon={
                      <IconEdit className="text-white" width={20} height={20} />
                    }
                  />
                </View>
              </View>

              {/* Footer */}
              <View className="flex-row justify-end w-full p-2">
                <Button
                  text="Supprimer"
                  color="#ef4444"
                  textColor="white"
                  loading={loadingDelete}
                  onPress={handleDeleteCategory}
                  icon={
                    <IconTrash className="text-white" width={20} height={20} />
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
