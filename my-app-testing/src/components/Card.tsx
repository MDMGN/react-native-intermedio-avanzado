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
    <View>
      <Text>{title}</Text>
      {completed && <Text>Completed</Text>}
    </View>
  );
}
