import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const handleDelete = () => {
    Alert.alert(
      "are you sure you want to delete this task?",
      "This action cannot be undone.",
      [
        {
          text: "Yes",
          onPress: () => console.log("Task deleted"),
          style: "destructive",
        },
        {
          text: "Cancel",
          onPress: () => console.log("Deletion cancelled"),
          style: "cancel",
        },
      ],
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <Text>Coffee</Text>
        <TouchableOpacity
          onPress={handleDelete}
          style={styles.deleteButton}
          activeOpacity={0.7}
        >
          <Text style={styles.textColor}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
  deleteButton: {
    backgroundColor: "#000",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  textColor: {
    color: "#fff",
    letterSpacing: 1,
  },
});
