'use strict'
//const sqlite3 = require("sqlite3").verbose();  // use sqlite
//const fs = require("fs"); // file system
import {makeServerRequest} from './translate.js';
import {makeDbRequest} from './FlashcardsDB.js';
var check = false;

function Title() {
    return React.createElement(
	"div", {id: "title"}, startReview(), lango)
}

var lango = React.createElement(
    "div",
    { id: "holdLogo" }, React.createElement("h1", {id: "logo"}, "Lango!")
);

function startReview() {
    return React.createElement(
	"div",
	{id: "review_div" },
	React.createElement(
	    "input", {type: "review", value: "Start Review", id: "review", onClick: ToReview},
	)
    )
}

function ToReview() {
    window.location.href="/user/review.html";
}

function Overall() {
    return React.createElement(
	"div",
	{id: "overall"}, FirstCard(), Output()
    )
}

function FirstCard() {
    return React.createElement(
	"div",
	{ id: "inputDiv" },
	React.createElement(
	   "input", {id: "word", onKeyPress: checkReturn})
    );
}

function checkReturn(event) {
    if (event.charCode == 13) {
        check = true;
        makeServerRequest();
    }
}

function Output() {
	return React.createElement(
		"div",
		{ id: "outputDiv" },
            React.createElement(
		"div", {id: "outputGoesHere"}, React.createElement("p", {id: "text"}))
	);
}

function FirstInputCard() {
	return React.createElement(
		"div",
		{ id: "save_div" },
        React.createElement(
            "input", {type: "save", value: "Save", id: "save", onClick:checkSave},
        )
	)
}

function checkSave() {
    if (check == true) {
	check = false;
	makeDbRequest();
    } else {
	alert('checkSave -- Woops, there was an error making the request.');
    }
}


function footer() {
    return React.createElement(
        "footer", {className: "foot"}, React.createElement("p", null, "UserName")
    )
}

var main = React.createElement(
	"main",
	null,
	React.createElement(Title,null),
    React.createElement(Overall,null),
    React.createElement(FirstInputCard, null),
    React.createElement(footer, null)
);

ReactDOM.render(
    main, document.getElementById('root')
);
 
