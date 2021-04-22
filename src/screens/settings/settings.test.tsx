import ReactDOM from "react-dom";
import SettingsScreen from "./settings";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SettingsScreen />, div);
});
