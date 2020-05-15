
const App = () => {
    return React.createElement(
        "div", { id: "my-root-div" },
        [
            React.createElement("h1", {}, "Hello React!!"),
            React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Dabber" }),
            React.createElement(Pet, { name: "Caty", animal: "Cat", breed: "Mamal" }),
            React.createElement(Pet, { name: "Pipper", animal: "Bird", breed: "Mixed" })
        ]
    );
};
const Pet = ({ name, animal, breed }) => {
    return React.createElement("div", {},
        [
            React.createElement("h1", {}, name),
            React.createElement("h2", {}, animal),
            React.createElement("h2", {}, breed)
        ]

    )
}
ReactDOM.render(React.createElement(App), document.getElementById("root"));