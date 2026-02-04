import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
import { TaskItem } from "../components/task-item";

export default function App() {
  return (
    <View style={styles.container}>
      <Link href="/counter" style={styles.link}>
        Go To Counter
      </Link>
      <TaskItem name="Coffee" isCompleted={false} />
      <TaskItem name="Sugar" isCompleted />
      <TaskItem name="Tea" isCompleted />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  link: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
});
