import React from "react";
import { render } from "react-dom";

import SearchParams from "./SearchPrams";
const App = () => {
  return (
    <div id="my-root-div">
      <SearchParams />
    </div>
  );
};
render(React.createElement(App), document.getElementById("root"));
