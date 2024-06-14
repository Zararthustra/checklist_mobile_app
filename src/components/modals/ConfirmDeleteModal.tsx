import { TouchableWithoutFeedback } from "react-native";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../Button";
import { ICategory } from "@interfaces/index";
import { useMutationDeleteCategory } from "@queries/index";
import { IconTrash } from "@assets/index";
import { useEffect } from "react";
import { useColorScheme } from "nativewind";

interface IConfirmDeleteModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  category: ICategory;
}
export const ConfirmDeleteModal = ({
  showModal,
  setShowModal,
  category,
}: IConfirmDeleteModalProps) => {
  const { colorScheme } = useColorScheme();
  const {
    mutate: deleteCategory,
    isSuccess: categoryDeleted,
    isPending: loadingDelete,
  } = useMutationDeleteCategory();

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
        style={{ backgroundColor: "#000000CC" }}
        onPressOut={() => {
          setShowModal(false);
        }}
      >
        <View className="h-full justify-center flex items-center">
          <TouchableWithoutFeedback>
            <View className="bg-white dark:bg-zinc-800 w-[90%] max-w-[400px] h-[180px] flex-col justify-between items-center p-3 rounded-tl-2xl rounded-br-2xl border-[1px] border-zinc-500 dark:border-zinc-600">
              <Text className="dark:text-white text-2xl font-bold">
                Êtes-vous sûr ?
              </Text>
              <View className="items-center">
                <Button
                  text={"Supprimer " + category.name}
                  color="#ef4444"
                  textColor="white"
                  loading={loadingDelete}
                  onPress={() => deleteCategory(category.id)}
                  icon={
                    <IconTrash className="text-white" width={20} height={20} />
                  }
                />
                <View className="mt-2">
                  <Button
                    text="Annuler"
                    color=""
                    textColor={colorScheme === "dark" ? "white" : "black"}
                    onPress={() => setShowModal(false)}
                  />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
