import Button from "../components/Button";
import CounterText from "../components/CounterText";
import { fireEvent, render } from "@testing-library/react-native";
import { sum } from "../helpers";

describe("Mi primera prueba", () => {
  test("Probando una función de suma", () => {
    expect(sum(5, 4)).toBe(9);
  });
});

describe("Probando counter.store", () => {
  test("Probando el componente CounterText", () => {
    const { getByTestId } = render(
      <>
        <CounterText />
        <Button />
      </>
    );
    expect(getByTestId("counter-text")).toHaveTextContent("0");
    fireEvent.press(getByTestId("counter-button"));
    fireEvent.press(getByTestId("counter-button"));
    expect(getByTestId("counter-text")).toHaveTextContent("2");
    expect(getByTestId("counter-text"));
  });
});
