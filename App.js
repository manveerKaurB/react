import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1",{id:"heading"}, "Hello World from React");
console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root")); // create root
// root.render(heading); // render method convert object to tag and put that inside root

/*
<div id="parent">
    <div id="child">
        <h1> I am h1 tag</h1>
        <h2> I am h2 tag</h2>
    </div>
</div>
*/

// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         [React.createElement("h1",{},"I am h1 tag"), React.createElement("h2",{}, "I am h2 tag")]
//     )
// );

/*
<div id="parent">
    <div id="child1">
        <h1> I am h1 tag</h1>
        <h2> I am h2 tag</h2>
    </div>
    <div id="child2">
        <h1> I am h1 tag</h1>
        <h2> I am h2 tag</h2>
    </div>
</div>
*/

const parent = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
            "div",
            {id:"child1"},
            [React.createElement("h1",{},"This is react"), React.createElement("h2",{}, "I am h2 tag")]
    ),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h1",{},"I am h1 tag"), React.createElement("h2",{}, "I am h2 tag")]
    )]
);

root.render(parent);