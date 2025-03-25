import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import Card, { Todo } from "./Card";
import { getTODOS } from "../helpers";
import useTodos from "../hooks/useTodos";

export default function Cards() {
const {data} = useTodos()

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id + ""}
        renderItem={({ item }) => <Card todo={item} />}
      />
    </View>
  );
}
