const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "ArdiW"),
        React.createElement("h2", {}, "Cat"),
        React.createElement("h2", {}, "Persia"),

    ])
}

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet),
        React.createElement(Pet),
        React.createElement(Pet)

    ])
}

ReactDOM.render(
    React.createElement(App), document.getElementById("root"));