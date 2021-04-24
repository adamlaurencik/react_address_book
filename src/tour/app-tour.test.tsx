import ReactDOM from "react-dom";
import { mocked } from "ts-jest/utils";
import AppTour from "./app-tour";
import useAppTourSteps from "./app-tour-steps";

jest.mock("./app-tour-steps", () => jest.fn());

const mockedStepsHook = mocked(useAppTourSteps, true);

it("renders without crashing", () => {
  mockedStepsHook.mockReturnValue([]);
  const div = document.createElement("div");
  ReactDOM.render(<AppTour />, div);
});
