import {
  Button,
  Modal,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { IconClose } from "@assets/index";
import { ICategory } from "@interfaces/index";
import { useMutationDeleteCategory } from "@queries/index";
import { useEffect } from "react";

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
  const { mutate: deleteCategory, isSuccess: categoryDeleted } =
    useMutationDeleteCategory();

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
      <TouchableWithoutFeedback
        onPress={() => setShowModal(false)}
        className=""
      >
        <View className="h-full justify-center flex items-center bg-black opacity-90">
          <View className="bg-zinc-100 w-[90%] max-w-[400px] h-[60%] max-h-[600px] flex-col justify-between items-center p-2 rounded-tl-2xl rounded-br-2xl">
            {/* Header */}
            <View className="flex-row justify-end w-full">
              <Pressable onPress={() => setShowModal(false)}>
                <IconClose className="text-zinc-800" />
              </Pressable>
            </View>

            {/* Body */}
            <View>
              <Text>Category options</Text>
            </View>

            {/* Footer */}
            <View className="flex-row justify-end w-full p-2">
              <Button
                color="red"
                title="Supprimer"
                onPress={handleDeleteCategory}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
