import { FlatList, View } from "react-native";
import Card from "./Card";
import { FlashList } from "@shopify/flash-list";
import useTodos from "../hooks/useTodos";

export default function Cards() {
  const { data } = useTodos();

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id + ""}
        renderItem={({ item }) => <Card todo={item} />}
      />
    </View>
  );
}
