import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import Card, { Todo } from "./Card";

export default function Cards() {
  const [data, setData] = useState<Todo[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todos) => setData(todos));
  }, []);
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
