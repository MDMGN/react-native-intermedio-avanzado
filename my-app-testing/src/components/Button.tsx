import { View, Text, Pressable } from "react-native";
import React from "react";
import useCounter from "../store/counter.store";
import shallow, { useShallow } from "zustand/shallow";

export default function Button() {
  const increment = useCounter((state) => state.increment);
  console.log("Render desde el botón");
  return (
    <Pressable onPress={increment} testID="counter-button">
      <Text>+</Text>
    </Pressable>
  );
}
