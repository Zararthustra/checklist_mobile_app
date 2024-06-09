import AsyncStorage from "@react-native-async-storage/async-storage";

export const setAS = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e: any) {
    throw new Error("Cannot store object: ", e);
  }
};

export const getAS = async (key: string) => {
  let value: string | null = "";
  try {
    value = await AsyncStorage.getItem(key);
  } catch (e: any) {
    throw new Error("Cannot get object: ", e);
  }
  return value;
};

export const deleteAS = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e: any) {
    throw new Error("Cannot delete object: ", e);
  }
};
