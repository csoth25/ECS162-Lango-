'use strict';
//const sqlite3 = require("sqlite3").verbose();  // use sqlite
//const fs = require("fs"); // file system
import {makeServerRequest} from './translate.js';
import {makeDbRequest} from './FlashcardsDB.js';

var lango = React.createElement(
	"h1",
	{ id: "logo" },
	"Lango!"
);

function FirstCard() {
    return React.createElement(
	"div",
	{ id: "inputDiv" },
	React.createElement(
	    "input", {id: "word", onKeyPress: checkReturn}
	)
    );
}

function checkReturn(event) {
    console.log(event.charCode)
    if (event.charCode == 13) {
        console.log("inside if");
        makeServerRequest();
    }
}

function Output() {
	return React.createElement(
		"div",
		{ id: "outputDiv" },
        React.createElement("p", {id: "outputGoesHere"}, null
        )
	);
}

/*function test() {
    return React.createElement(
        "div",
        {className: "request_div"},
        React.createElement(
            "input",
            {type: "submit", value: "submit", id: "submit", onClick:makeServerRequest}
        )
    )
}*/
function FirstInputCard() {
	return React.createElement(
		"div",
		{ className: "save_div" },
        React.createElement(
            "input", {type: "save", value: "save", id: "save", onClick:makeDbRequest},
        )
	)
}

//need to add onClick:startReviewRequest(), next phase?
function startReview() {
    return React.createElement(
        "div",
        { className: "review_div" },
        React.createElement(
            "input", {type: "review", value: "Start Review", id: "review"},
        )
    )
}



function footer() {
    return React.createElement(
        "footer", {className: "foot"}, React.createElement("p", null, "Username")
    )
}

var main = React.createElement(
	"main",
	null,
    React.createElement(startReview, null),
    lango,
    React.createElement(FirstCard, null),
    React.createElement(Output, null),
   // React.createElement(test, null),
    React.createElement(FirstInputCard, null),
    React.createElement(footer, null)
);

ReactDOM.render(
    main, document.getElementById('root')
);
 
