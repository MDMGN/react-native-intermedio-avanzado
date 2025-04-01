import { View, Text } from "react-native";
import React from "react";
import useCounter from "../store/counter.store";
import { useShallow } from "zustand/shallow";

export default function CounterText() {
  const { count } = useCounter(
    useShallow((state) => ({
      count: state.count,
      name: state.name,
    }))
  );

  console.log("Render desde CounterText");
  return (
    <View>
      <Text testID="counter-text">{count}</Text>
    </View>
  );
}
