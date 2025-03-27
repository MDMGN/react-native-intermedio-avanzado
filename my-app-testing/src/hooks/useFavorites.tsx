import { useContext, useState } from "react";
import { FavoritesContext, Todo } from "../context/FavoritesContext";
import { getTODOS } from "../helpers";

export default function useFavorites() {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const addFavorites = async (item: Todo) => {
    const todos = await getTODOS();
    const exits = todos.find((todo) => todo.id == item.id);
    if (exits) return false;
    setFavorites((prev) => [...prev, item]);
    return true;
  };

  return {
    favorites,
    setFavorites,
    addFavorites,
  };
}
