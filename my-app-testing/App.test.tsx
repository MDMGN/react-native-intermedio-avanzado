import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react-native";
import useCounter from "./src/store/counter.store";
import CounterText from "./src/components/CounterText";
import App from "./App";

describe("Probando App.tsx", () => {
  it("Probando counter.store", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  it("Probando CounterText", async () => {
    render(<App />);
    const counterText = await screen.findByTestId("counter-text");
    const counterButton = await screen.findByTestId("counter-button");
    expect(counterText).toHaveTextContent("0");
    fireEvent.press(counterButton);
    expect(counterText).toHaveTextContent("1");
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
