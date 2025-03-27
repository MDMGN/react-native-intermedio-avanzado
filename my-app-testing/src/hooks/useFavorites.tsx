import { useContext, useState } from "react";
import { FavoritesContext, Todo } from "../context/FavoritesContext";

export default function useFavorites() {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const addFavorites = (item: Todo) => {
    setFavorites((prev) => [...prev, item]);
  };

  return {
    favorites,
    setFavorites,
    addFavorites,
  };
}
