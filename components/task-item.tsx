import Ionicons from "@expo/vector-icons/Ionicons";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
type Props = {
  name: string;
  isCompleted?: boolean;
};
export function TaskItem({ name, isCompleted }: Props) {
  const handleDelete = () => {
    Alert.alert(
      `are you sure you want to delete ${name}?`,
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
    <View
      style={[
        styles.taskContainer,
        isCompleted ? styles.taskContainerCompleted : null,
      ]}
    >
      <Text style={[isCompleted ? styles.completedText : null]}>{name}</Text>
      <TouchableOpacity onPress={handleDelete} activeOpacity={0.7}>
        <Ionicons
          name="close-circle"
          size={24}
          color={isCompleted ? "#7e7e7e" : "red"}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#5898e0",
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  taskContainerCompleted: {
    backgroundColor: "#e0e0e0",
    borderBottomColor: "#d3cdcdc1",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#888",
  },
});
