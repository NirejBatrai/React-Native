import { StatusBar } from "expo-status-bar";
import { StyleSheet, Alert, SafeAreaView, Button } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="Click ME"
        onPress={() =>
          Alert.prompt("My title", "MY message", (text) => console.log(text))
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100, // Set your desired width
    height: 100, // Set your desired height
  },
  text: {
    color: "white",
  },
});
