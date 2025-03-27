import { act, renderHook, waitFor } from "@testing-library/react-native";
import useFavorites from "./useFavorites";
import { FavoritesProvider } from "../context/FavoritesContext";
import { PropsWithChildren } from "react";

describe("useFavorites.tsx Testing", () => {
  const wrapper = ({ children }: PropsWithChildren) => (
    <FavoritesProvider>{children}</FavoritesProvider>
  );

  it("favorites === []", () => {
    const { result } = renderHook(useFavorites, { wrapper });
    expect(result.current.favorites).toEqual([]);
  });
});
