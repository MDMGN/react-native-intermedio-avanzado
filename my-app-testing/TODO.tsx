import { View, Text } from "react-native";
import React from "react";
import Cards from "./src/components/Cards";
import { FavoritesProvider } from "./src/context/FavoritesContext";

export default function TODO() {
  return (
    <FavoritesProvider>
      <View style={{ flex: 1 }}>
        <Cards />
      </View>
    </FavoritesProvider>
  );
}
