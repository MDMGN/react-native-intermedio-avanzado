import { View, Text } from "react-native";
import React from "react";
import useCounter from "../store/counter.store";

export default function CounterText() {
  const count = useCounter((state) => state.count);

  console.log("Render desde CounterText");
  return (
    <View>
      <Text testID="counter-text">{count}</Text>
    </View>
  );
}
