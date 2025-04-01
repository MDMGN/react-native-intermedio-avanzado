import { View, Text } from "react-native";
import React from "react";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type Props = {
  todo: Todo;
};

export default function Card({ todo }: Props) {
  const { title, completed } = todo;
  return (
    <View
      style={{
        height: 300,
        width: "80%",
      }}
    >
      <Text testID="card-text" style={{ color: "#000" }}>
        {title}
      </Text>
      {completed && <Text testID="card-completed">Completed</Text>}
    </View>
  );
}
