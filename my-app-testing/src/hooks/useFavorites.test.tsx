import { act, renderHook, waitFor } from "@testing-library/react-native";
import useFavorites from "./useFavorites";
import { FavoritesProvider } from "../context/FavoritesContext";
import { PropsWithChildren } from "react";
import { getTODOS } from "../helpers";

jest.mock("../helpers.ts");

describe("useFavorites.tsx Testing", () => {
  const wrapper = ({ children }: PropsWithChildren) => (
    <FavoritesProvider>{children}</FavoritesProvider>
  );
  (getTODOS as jest.Mock).mockResolvedValue([
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
  ]);
  it("favorites === []", () => {
    const { result } = renderHook(useFavorites, { wrapper });
    expect(result.current.favorites).toEqual([]);
  });

  it("favorites == []", async () => {
    const { result } = renderHook(useFavorites, { wrapper });

    await waitFor(() => result.current.favorites !== undefined);
    const isAdded = await result.current.addFavorites({
      userId: 1,
      id: 4,
      title: "fugiat veniam minus",
      completed: false,
    });

    expect(isAdded).toBe(true);
  });
});
