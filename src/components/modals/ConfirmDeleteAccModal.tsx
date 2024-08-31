import { TouchableWithoutFeedback } from "react-native";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../Button";
import { useMutationDeleteUser } from "@queries/index";
import { useEffect } from "react";
import { useColorScheme } from "nativewind";
import { getAS } from "@utils/asyncStorage";

interface IConfirmDeleteAccModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}
export const ConfirmDeleteAccModal = ({
  showModal,
  setShowModal,
}: IConfirmDeleteAccModalProps) => {
  const { colorScheme } = useColorScheme();
  const {
    mutate: deleteUser,
    isSuccess: userDeleted,
    isPending: loadingDelete,
  } = useMutationDeleteUser();

  useEffect(() => {
    if (userDeleted) setShowModal(false);
  }, [userDeleted]);

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
                Êtes-vous sûr sûr sûr ?
              </Text>
              <View className="items-center">
                <Button
                  text={"Supprimer mon compte à tout jamais"}
                  color="#ef4444"
                  textColor="white"
                  loading={loadingDelete}
                  onPress={async () => {
                    deleteUser((await getAS("userId")) || "");
                  }}
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
