import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { useRouter } from "expo-router";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { registerForPushNotificationsAsync } from "../../utils/registerForPushNotificationsAsync";

export default function CounterScreen() {
  const router = useRouter();
  const handleRequestPermission = async () => {
    const result = await registerForPushNotificationsAsync();
    if (result === "granted") {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: " ",
          body: "",
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
          seconds: 1,
        },
      });
    } else {
      if (Device.isDevice) {
        Alert.alert(
          "Permission not granted for push notifications",
          "Please enable notifications in your device settings.",
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleRequestPermission}
        style={styles.button}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Request permission</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.navigate("/idea")}>
        <Text style={styles.text}>go to idea</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Counter</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
  },
  button: {
    backgroundColor: "black",
    padding: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
