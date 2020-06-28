import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
const App = () => {
  return (
    <div id="my-root-div">
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Dabber" />
      <Pet name="Caty" animal="Cat" breed="Mamal" />
      <Pet name="Pipper" animal="Bird" breed="Mixed"></Pet>
    </div>
  );
};
render(React.createElement(App), document.getElementById("root"));
