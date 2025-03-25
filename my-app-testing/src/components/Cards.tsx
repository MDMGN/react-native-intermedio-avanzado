import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import Card, { Todo } from "./Card";
import { getTODOS } from "../helpers";

export default function Cards() {
  const [data, setData] = useState<Todo[]>([]);

  useEffect(() => {
    getTODOS().then((todos) => setData(todos));
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
