import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import useAddressBook from "./address-book-hook";
import { SnackbarProvider } from "notistack";
import useWindowSize from "hooks/screen-size-hook";
import * as userService from "../../service/randomuser/randomuser-service";
import User from "model/user";
import AddressBookScreen from "./address-book";

jest.mock("../../hooks/screen-size-hook", () => jest.fn());

const mockedUseWindowSize = mocked(useWindowSize, true);

it("correctly assigns mobile screenVersion", async () => {
  mockedUseWindowSize.mockImplementation(() => ({ width: 300, height: 500 }));
  const TestComponent = () => {
    const { screenVersion } = useAddressBook();
    return <div>{screenVersion}</div>;
  };

  render(
    <SnackbarProvider>
      <TestComponent />
    </SnackbarProvider>
  );

  expect(await screen.findByText("sm")).toBeInTheDocument();
});

it("correctly assigns desktop screenVersion", async () => {
  mockedUseWindowSize.mockImplementation(() => ({ width: 1024, height: 800 }));
  const TestComponent = () => {
    const { screenVersion } = useAddressBook();
    return <div>{screenVersion}</div>;
  };

  render(
    <SnackbarProvider>
      <TestComponent />
    </SnackbarProvider>
  );

  expect(await screen.findByText("lg")).toBeInTheDocument();
});

jest.mock("../../service/randomuser/randomuser-service", () => ({
  loadUsers: jest.fn(),
}));

const mockedUserService = mocked(userService, true);

it("correctly filters users by name", async () => {
  mockedUseWindowSize.mockImplementation(() => ({ width: 1024, height: 800 }));
  const query = "Test Joe";
  const passingNames = ["Test Joe", "TEST Joe"];
  const notPassingNames = ["TestJoe", "Different"];

  const users: User[] = [...passingNames, ...notPassingNames].map((name) => ({
    name: {
      title: "",
      first: name.split(" ")[0],
      last: name.split(" ")[1],
    },
  }));

  mockedUserService.loadUsers.mockResolvedValue({ results: users });

  const { container } = render(
    <SnackbarProvider>
      <AddressBookScreen />
    </SnackbarProvider>
  );

  await waitFor(() => screen.findByText("TestJoe"));

  expect(screen.getAllByText("TestJoe").length).toBeGreaterThan(0);
  expect(screen.getAllByText("Test").length).toBeGreaterThan(0);
  expect(screen.getAllByText("Different").length).toBeGreaterThan(0);
  expect(screen.getAllByText("TEST").length).toBeGreaterThan(0);

  fireEvent.change(container.querySelector("#search-filter input")!, {
    target: { value: query },
  });

  expect(screen.queryByText("TestJoe")).toBe(null);
  expect(screen.queryByText("Different")).toBe(null);
  expect(screen.getAllByText("Test").length).toBeGreaterThan(0);
  expect(screen.getAllByText("TEST").length).toBeGreaterThan(0);
});
