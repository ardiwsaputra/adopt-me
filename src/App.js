import React from 'react';
import {
    render
} from 'react-dom';
import Pet from './Pet';

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Isabel",
            animal: "Cat",
            breed: "Persia"
        }),
        React.createElement(Pet, {
            name: "Catalan",
            animal: "Bird",
            breed: "Cocktaiel"
        }),
        React.createElement(Pet, {
            name: "Dobo",
            animal: "Dog",
            breed: "Havanese"
        })
    ])
}

render(React.createElement(App), document.getElementById("root"));