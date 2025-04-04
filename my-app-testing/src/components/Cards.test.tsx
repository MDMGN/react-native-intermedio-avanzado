import { render, screen } from "@testing-library/react-native";
import { getTODOS } from "../helpers";
import Cards from "./Cards";

jest.mock("../helpers.ts");
describe("Probando Cards.tsx", () => {
  const mockTodos = [
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      userId: 1,
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false,
    },
    {
      userId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      userId: 1,
      id: 8,
      title: "quo adipisci enim quam ut ab",
      completed: true,
    },
  ];

  (getTODOS as jest.Mock).mockResolvedValue(mockTodos);

  it("Renderizado de Card.tsx", async () => {
    render(<Cards />);

    for (const todo of mockTodos) {
      expect(await screen.findByText(todo.title)).toBeTruthy();
    }
  });
});
