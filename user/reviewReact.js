'use strict'

//this import is not working - can't make call to makeUserNameRequest() in footer
//import {makeUserNameRequest} from './footer.js';

function Title() {
    return React.createElement(
	"div", {id: "title"}, add(), lango)
}

var lango = React.createElement(
    "div",
    { id: "holdLogo" }, React.createElement("h1", {id: "logo"}, "Lango!")
);

function add() {
    return React.createElement(
	"div",
	{id: "review_div" },
	React.createElement(
	    "input", {type: "add", value: "Add", id: "add", onClick: ToCreate},
	)
    )
}

function ToCreate() {
    window.location.href="/user/translate.html";
}

function Overall() {
    return React.createElement(
	"div",
	{id: "overall"}, Question(), Answer()
    )
}

function Question() {
    return React.createElement(
	"div",
	{ id: "inputDiv" },
	React.createElement(
       "p", {id: "word"}), React.createElement("img", {src: "./assets/noun_Refresh_2310283.svg", id: "image"}),//onclick: "Flip to correct"
    );
}

function Answer() {
	return React.createElement(
		"div",
		{ id: "outputDiv" },
            React.createElement(
		"input", {id: "outputGoesHere"})
	);
}

function Next() {
	return React.createElement(
		"div",
		{ id: "nextDiv" },
        React.createElement(
            "input", {type: "next", value: "Next", id: "next"}
        )
	)
}

function footer() {
	return React.createElement(
		"footer", {className: "foot"}, React.createElement("p", {id: "placeholder", onClick: getUsername}, "UserName")
														 )
}

function getUsername() {
	//makeUserNameRequest();
	console.log("inside getUsername");
}


var main = React.createElement(
	"main",
	null,
	React.createElement(Title,null),
    React.createElement(Overall,null),
    React.createElement(Next, null),
    React.createElement(footer, null)
);

ReactDOM.render(
    main, document.getElementById('root')
);
