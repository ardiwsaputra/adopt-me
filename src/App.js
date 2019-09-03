import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Isabel",
  //     animal: "Cat",
  //     breed: "Persia"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Catalan",
  //     animal: "Bird",
  //     breed: "Cocktaiel"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Dobo",
  //     animal: "Dog",
  //     breed: "Havanese"
  //   })
  // ]);

  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Isabel" animal="Cat" breed="Persia" />
      <Pet name="Catalan" animal="Bird" breed="Cocktaiel" />
      <Pet name="Bobo" animal="Dog" breed="Havanese" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
