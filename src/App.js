const Pet = ({
    name,
    animal,
    breed
}) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),

    ])
}

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Isabel",
            animal: "Cat",
            breed: "Persia"
        }),
        React.createElement(Pet, {
            name: "Pepper",
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

ReactDOM.render(
    React.createElement(App), document.getElementById("root"));