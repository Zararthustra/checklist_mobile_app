import { Pressable, Text, View } from "react-native";
import { IconLoader } from "src/assets";

interface IButtonProps {
  disabled?: boolean;
  loading?: boolean;
  color: string;
  onPress: () => void;
  text: string;
  textColor: string;
  icon?: React.ReactNode;
}
export const Button = ({
  disabled,
  loading,
  color,
  onPress,
  text,
  textColor,
  icon,
}: IButtonProps) => {
  return (
    <Pressable
      disabled={disabled || loading}
      style={({ pressed }) => [
        {
          backgroundColor: disabled || loading ? "#bbb" : color,
          paddingHorizontal: 12,
          paddingVertical: 5,
          borderRadius: 3,
          opacity: pressed ? 0.8 : 1,
        },
      ]}
      onPress={onPress}
      accessible
      accessibilityLabel={text}
    >
      <View className="flex-row gap-3 items-center">
        {loading ? (
          <View>
            <IconLoader width={20} height={20} style={{ color: textColor }} />
          </View>
        ) : (
          icon
        )}
        <Text style={{ color: textColor, fontWeight: "bold" }}>{text}</Text>
      </View>
    </Pressable>
  );
};
