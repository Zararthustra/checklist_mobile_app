import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { IconLogo, IconParameter } from "src/assets";
import { SettingsModal } from "./modals/SettingsModal";

interface IHeaderProps {}
export const Header = ({}: IHeaderProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <View className="justify-between items-center flex flex-row pt-4 px-3">
      <SettingsModal showModal={showModal} setShowModal={setShowModal} />

      <Text className="w-[26px]"></Text>
      <IconLogo width={70} height={70} />
      <Pressable onPress={() => setShowModal(!showModal)}>
        <IconParameter className="text-zinc-800" width={28} height={28} />
      </Pressable>
    </View>
  );
};
