import {
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { IconClose, IconTrash } from "@assets/index";
import { ICategory } from "@interfaces/index";
import { useMutationDeleteCategory } from "@queries/index";
import { Button } from "../Button";
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
  const {
    mutate: deleteCategory,
    isSuccess: categoryDeleted,
    isPending: loadingDelete,
  } = useMutationDeleteCategory();

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
            <View className="bg-white w-[90%] max-w-[400px] h-[60%] max-h-[600px] flex-col justify-between items-center p-2 rounded-tl-2xl rounded-br-2xl">
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
