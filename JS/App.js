const heading = React.createElement("h1",{id:"title"},"My first React Javascript");
const heading1 = React.createElement("h2",{id:"title"},"My first React Page");
const container= React.createElement("div",{id:"container"},[heading,heading1]);
const roots = ReactDOM.createRoot(document.getElementById("root"));
roots.render(container);