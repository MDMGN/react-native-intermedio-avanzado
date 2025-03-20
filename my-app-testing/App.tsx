import { StyleSheet, View } from "react-native";
import CounterText from "./src/components/CounterText";
import Button from "./src/components/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <CounterText />
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
