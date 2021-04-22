import Navbar from "./navbar";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
    div
  );
});
