'use strict'

import {makeUserNameRequest, makeAnswerRequest, flip} from './footer.js';
import {makeTargetRequest, makeNextRequest, makeSourceRequest, makeNextSourceRequest} from './footer.js';

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

class Target {
    getTarget() {
	makeTargetRequest();
	makeSourceRequest();
    }
};

const aim = new Target();
aim.getTarget();

function Question() {
    return React.createElement(
	"div",
	{ id: "flip-card" },
	React.createElement("div", {id: "flip-card-inner"},
			    React.createElement("div", {id: "flip-card-front"}, React.createElement("p", {id: "word"}),
						React.createElement("img", {src: "./assets/noun_Refresh_2310283.svg", id: "image"})),
			    React.createElement("div", {id: "flip-card-back"}, React.createElement("p", {id: "ans"}))
			   ),
    );
}

function Answer() {
	return React.createElement(
		"div",
		{ id: "outputDiv" },
            React.createElement(
		"input", {id: "outputGoesHere", onKeyPress: CheckAns})
	);
}

function CheckAns(event) {
    if (event.charCode == 13) {
	flip();
	makeAnswerRequest();
    }
}

function Next() {
	return React.createElement(
		"div",
		{ id: "nextDiv" },
        React.createElement(
            "input", {type: "next", value: "Next", id: "next", onClick: Check}
        )
	)
}

function Check() {
    makeNextRequest();
    makeNextSourceRequest();
}

class userInfo {
    getUsername() {
	makeUserNameRequest();
    }
};

const user = new userInfo();
user.getUsername();

function footer() {
	return React.createElement(
	    "footer", {className: "foot"}, React.createElement("p", {id: "placeholder"}, "UserName")
														 )
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
