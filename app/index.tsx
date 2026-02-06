import * as Haptics from "expo-haptics";
import { useEffect, useState } from "react";
import {
  FlatList,
  LayoutAnimation,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { TaskItem } from "../components/task-item";
import { getFromStorage, saveToStorage } from "../utils/storage";

type ShoppingListItem = {
  id: string;
  name: string;
  isCompleted: boolean;
};

const SHOPPING_LIST_KEY = "shoppingListItems";

export default function App() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState<ShoppingListItem[]>([]);

  const handleSubmit = async () => {
    if (value.trim() === "") {
      return;
    }
    const newItem: ShoppingListItem = {
      id: new Date().toISOString(),
      name: value.trim(),
      isCompleted: false,
    };
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setItems((prevItems) => [newItem, ...prevItems]);
    await saveToStorage(SHOPPING_LIST_KEY, [...items, newItem]);
    setValue("");
    console.log("Submitted:", newItem);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const storedItems = await getFromStorage(SHOPPING_LIST_KEY);
        if (storedItems) {
          setItems(storedItems);
        }
      } catch (error) {
        console.log("Error fetching items:", error);
      }
    };
    fetchItems();
  }, []);

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={items}
      renderItem={({ item }) => (
        <TaskItem name={item.name} isCompleted={item.isCompleted} />
      )}
      ListHeaderComponent={
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={setValue}
          placeholder="E.g. Coffee"
          placeholderTextColor={"#ccc"}
          keyboardType="default"
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
        />
      }
      ListEmptyComponent={() => (
        <View style={styles.emptyListContainer}>
          <Text>No items found 🤷‍♂️</Text>
        </View>
      )}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    paddingTop: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10,
    margin: 10,
    borderRadius: 50,
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
