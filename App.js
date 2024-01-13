import React from "react";
import ReactDOM from "react-dom/client";
// JSX is React element
// JSX - HTML-like or XML-like syntax (JSX is not HTML)
// JSX (transpiled by Parcel before it reaches the JS Engine) - Parcel - Babel (parcel uses babel for tranpilation)
// JSX => React.createElement => reactElement-JS Object => HTMLElement(render)
const elem = <spam>react elem</spam>
const jsxHeading = (<h1 id="heading" classname="head" tabIndex="1">
    {elem}<br/>
    Namaste React from JSX
    </h1>);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// React Component
// Class Based Component - OLD
// Functional Component - NEW

// REACT FUNCTIONAL COMPONENT
const TitleComponent = () => (
    <h1>Title component</h1>
);
const HeadingComponent = () => {
    return <h1>Namaste React Functional Component</h1>;
};
// for single line we can remove return and parenthesis
const HeadingComponent2 = () =>  <h1>Namaste React Functional Component</h1>;
//multi line (parenthesis)
const HeadingComponent3 = () =>  (
<h1>Namaste React Functional Component</h1>
);
// root.render(<HeadingComponent/>);
const number = 10000;
const HeaderComponent = () => (
    <div id="container">
        {jsxHeading}
        {number} <br/>
        {100 + 20}
        <TitleComponent/>
        <h1>namaste react</h1>
    </div>
)
root.render(<HeaderComponent/>);

// normal functional component 
const TitleComp = function () {
    return (
        <h1 className="title">
            Namaste react from normal functional component
        </h1>
    )
}
//root.render(<TitleComp/>);