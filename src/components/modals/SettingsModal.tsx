import {
  Button,
  Modal,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useContext } from "react";
import { AuthContext } from "@utils/authContext";
import { IconClose } from "src/assets";

interface ISettingsModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}
export const SettingsModal = ({
  showModal,
  setShowModal,
}: ISettingsModalProps) => {
  const { signOut } = useContext(AuthContext);

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
            <View className="flex-row justify-between items-center w-full">
              <Text className="text-2xl font-bold pl-4">Paramètres</Text>
              <Pressable onPress={() => setShowModal(false)}>
                <IconClose className="text-zinc-800" />
              </Pressable>
            </View>

            {/* Body */}
            <View>
              <Text>Settings</Text>
            </View>

            {/* Footer */}
            <View>
              <Button color="red" title="deconnexion" onPress={signOut} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
