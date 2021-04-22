import MainContainer from "./main-container";

import ReactDOM from "react-dom";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MainContainer>Test</MainContainer>, div);
});
