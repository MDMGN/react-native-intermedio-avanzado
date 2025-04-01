import { create } from "zustand";

type Counter = {
  count: number;
  increment: () => void;
  name: string;
};

const useCounter = create<Counter>((set) => ({
  count: 0,
  name: "John Doe",
  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),
}));

export default useCounter;
