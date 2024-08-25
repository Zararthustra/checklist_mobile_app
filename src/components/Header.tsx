import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { IconLogo, IconParameter } from "@assets/index";
import { SettingsModal } from "./modals/SettingsModal";

interface IHeaderProps {}
export const Header = ({}: IHeaderProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <View className="justify-between items-center flex flex-row pt-1 px-6 mb-5">
      <SettingsModal showModal={showModal} setShowModal={setShowModal} />

      <Text className="w-[26px]"></Text>
      <IconLogo width={70} height={70} className="text-black dark:text-white" />
      <Pressable onPress={() => setShowModal(!showModal)}>
        <IconParameter
          className="text-zinc-800 dark:text-white"
          width={28}
          height={28}
        />
      </Pressable>
    </View>
  );
};
