import AsyncStorage from "@react-native-async-storage/async-storage";

export const getFromStorage = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    const result = value !== null ? JSON.parse(value) : null;
    return result;
  } catch (error) {
    console.error(`Error getting item with key "${key}":`, error);
    return null;
  }
};

export const saveToStorage = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving item with key "${key}":`, error);
  }
};
