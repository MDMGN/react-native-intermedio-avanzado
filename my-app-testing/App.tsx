import { StyleSheet, View } from "react-native";
import CounterText from "./src/components/CounterText";
import Button from "./src/components/Button";
import { useEffect, useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const sleep = (mili: number) => {
      return new Promise((resolve) => setTimeout(resolve, mili));
    };
    sleep(100).then(() => setShow(true));
  }, []);
  return (
    <View style={styles.container}>
      {show && <CounterText />}
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
