import { Pressable, View } from "react-native";
import { flat, greys, pastels } from "@data/colors";
import { useMutationUpdateCategory } from "@queries/index";
import { IconLoader } from "src/assets";

interface IPaletteModalProps {
  categoryColor: string;
  categoryId: string;
}

export const PaletteModal = ({
  categoryColor,
  categoryId,
}: IPaletteModalProps) => {
  const {
    mutate: updateCategory,
    isSuccess: categoryUpdated,
    isPending: loadingUpdate,
  } = useMutationUpdateCategory();

  return (
    <View className="z-10 absolute top-[40px] right-[0px] border-[1px] border-zinc-200 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-700 w-[175px] h-[190px] flex-col p-2 rounded-tl-lg rounded-br-lg">
      {loadingUpdate ? (
        <View className="justify-center items-center h-full">
          <IconLoader width={70} height={70} style={{ color: categoryColor }} />
        </View>
      ) : (
        <>
          {/* Greys */}
          <View className="flex-row gap-2">
            {greys.map((item, index) => (
              <Pressable
                key={index}
                onPress={() =>
                  updateCategory({
                    payload: {
                      color: item,
                    },
                    id: categoryId,
                  })
                }
              >
                <View
                  style={{
                    backgroundColor: item,
                    borderColor:
                      categoryColor === item ? "#22c55e" : "transparent",
                  }}
                  className="w-[25px] h-[25px] rounded-tl rounded-br border-[2px]"
                />
              </Pressable>
            ))}
          </View>

          {/* Pastels */}
          <View className="flex-row flex-wrap gap-2 mt-2">
            {pastels.map((item, index) => (
              <Pressable
                key={index}
                onPress={() =>
                  updateCategory({
                    payload: {
                      color: item,
                    },
                    id: categoryId,
                  })
                }
              >
                <View
                  style={{
                    backgroundColor: item,
                    borderColor:
                      categoryColor === item ? "#22c55e" : "transparent",
                  }}
                  className="w-[25px] h-[25px] rounded-tl rounded-br border-[2px]"
                />
              </Pressable>
            ))}
          </View>

          {/* Flats */}
          <View className="flex-row flex-wrap gap-2 mt-2">
            {flat.map((item, index) => (
              <Pressable
                key={index}
                onPress={() =>
                  updateCategory({
                    payload: {
                      color: item,
                    },
                    id: categoryId,
                  })
                }
              >
                <View
                  style={{
                    backgroundColor: item,
                    borderColor:
                      categoryColor === item ? "#22c55e" : "transparent",
                  }}
                  className="w-[25px] h-[25px] rounded-tl rounded-br border-[2px]"
                />
              </Pressable>
            ))}
          </View>
        </>
      )}
    </View>
  );
};
