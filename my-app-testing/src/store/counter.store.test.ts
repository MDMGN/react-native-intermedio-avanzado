import { act, renderHook } from "@testing-library/react-native";
import useCounter from "./counter.store";

describe("useCounter store Test", () => {
  beforeEach(() => {
    useCounter.setState((state) => ({ count: 0 }));
  });
  test("count == 0", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  test("count == 1", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  test("count == 2", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    act(() => {
      result.current.increment();
      result.current.increment();
    });
    expect(result.current.count).toBe(2);
  });
});
