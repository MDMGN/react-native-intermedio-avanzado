import { act, renderHook, waitFor } from "@testing-library/react-native";
import { getTODOS } from "../helpers";
import useTodos from "./useTodos";

jest.mock("../helpers.ts");

describe("useTODOS hook Test", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
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
  ];

  (getTODOS as jest.Mock).mockResolvedValue(mockTodos);

  test("data state Test", async () => {
    const { result } = renderHook(() => useTodos());

    await waitFor(() => result.current.data !== undefined);

    /*  await act(async () => await getTODOS()); */

    expect(result.current.data).toEqual(mockTodos);
  });
});
