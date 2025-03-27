import { Todo } from "./context/FavoritesContext";

export function sum(a: number, b: number): number {
  return a + b;
}

export const getTODOS = async (): Promise<Todo[]> => {
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (res) => res.json()
  );
  return todos;
};
