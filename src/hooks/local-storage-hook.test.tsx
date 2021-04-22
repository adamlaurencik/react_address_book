import { render, screen } from "@testing-library/react";
import useLocalStorage from "./local-storage-hook";

export const mockLocalStorage = () => {
  const setItemMock = jest.fn();
  const getItemMock = jest.fn();

  beforeEach(() => {
    Storage.prototype.setItem = setItemMock;
    Storage.prototype.getItem = getItemMock;
  });

  afterEach(() => {
    setItemMock.mockRestore();
    getItemMock.mockRestore();
  });

  return { setItemMock, getItemMock };
};

const { getItemMock } = mockLocalStorage();

it("checks for value, and uses it if not present", () => {
  const TestComponent = () => {
    const [data] = useLocalStorage("key", "DEFAULT");
    return <div>{data}</div>;
  };
  render(<TestComponent />);

  expect(getItemMock).toHaveBeenCalledTimes(1);
});

it("uses stored value if present", async () => {
  //The value is stored as a stringified JSON
  getItemMock.mockReturnValue('"VALUE_FROM_STORAGE"');
  const TestComponent = () => {
    const [data] = useLocalStorage("key", "DEFAULT");
    return <div data-testid="data">{data}</div>;
  };
  render(<TestComponent />);
  expect(getItemMock).toHaveBeenCalledTimes(1);
  expect(await screen.findByTestId("data")).toHaveTextContent(
    "VALUE_FROM_STORAGE"
  );
});
