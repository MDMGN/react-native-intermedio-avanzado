import { render } from "@testing-library/react-native";
import Card from "./Card";

describe("Probando Card.tsx", () => {
  const todo1 = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };

  test("Probando el renderizado del title: " + todo1.title, () => {
    const { getByTestId } = render(<Card todo={todo1} />);
    expect(getByTestId("card-text")).toHaveTextContent(todo1.title);
  });
  test("Completed no render ", () => {
    const { queryByTestId } = render(<Card todo={todo1} />);
    expect(queryByTestId("card-completed")).toBeNull();
  });
  const todo2 = {
    userId: 2,
    id: 2,
    title: "delectus aut autem",
    completed: true,
  };
  test("Completed  render ", () => {
    const { queryByTestId } = render(<Card todo={todo2} />);
    expect(queryByTestId("card-completed")).toBeTruthy();
  });
});
