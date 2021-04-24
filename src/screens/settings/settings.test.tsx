import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { SnackbarProvider } from "notistack";
import ReactDOM from "react-dom";
import SettingsScreen from "./settings";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <SnackbarProvider>
      <SettingsScreen />
    </SnackbarProvider>,
    div
  );
});

it("renders does not allow to deselect all countries", async () => {
  const { container } = render(
    <SnackbarProvider>
      <SettingsScreen />
    </SnackbarProvider>
  );

  fireEvent.change(screen.getByTestId("nationality-input"), {
    target: { value: undefined },
  });

  await waitFor(() => container.querySelector("#notistack-snackbar"));
});
