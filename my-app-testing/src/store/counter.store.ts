import { create } from "zustand";

type Counter = {
  count: number;
  increment: () => void;
};

const useCounter = create<Counter>((set) => ({
  count: 0,
  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),
}));

export default useCounter;
