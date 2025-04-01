import { useEffect, useState } from "react";
import { Todo } from "../components/Card";
import { getTODOS } from "../helpers";

export default function useTodos() {
  const [data, setData] = useState<Todo[]>([]);

  useEffect(() => {
    getTODOS().then((todos) => setData(todos));
  }, []);

  useEffect(() => {
    console.log({ data });
  }, [data]);
  return {
    data,
  };
}
