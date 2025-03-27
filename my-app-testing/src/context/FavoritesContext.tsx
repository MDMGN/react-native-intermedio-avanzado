import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};
export type Favorites = {
  favorites: Todo[];
  setFavorites: Dispatch<SetStateAction<Array<Todo>>>;
};

export const FavoritesContext = createContext({} as Favorites);

export function FavoritesProvider({ children }: PropsWithChildren) {
  const [favorites, setFavorites] = useState<Array<Todo>>([]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}
