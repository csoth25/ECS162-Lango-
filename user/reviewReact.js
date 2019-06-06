'use strict'

//this import is not working - can't make call to makeUserNameRequest() in footer
import {makeUserNameRequest, makeAnswerRequest} from './footer.js';
import {makeTargetRequest, makeNextRequest} from './footer.js';

function Title() {
    return React.createElement(
	"div", {id: "title"}, add(), lango)
}

var lango = React.createElement(
    "div",
    { id: "holdLogo" }, React.createElement("h1", {id: "logo"}, "Lango!")
);

var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
											card.classList.toggle('is-flipped');
											});

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
    }
};

const aim = new Target();
aim.getTarget();

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
		"input", {id: "outputGoesHere", onKeyPress: CheckAns})
	);
}

function CheckAns(event) {
	if (event.charCode == 13) {
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

function flip() {
	let card = document.getElementById('card');
	card.classList.append('.hover');
	
}



var main = React.createElement(
	"main",
	null,
	React.createElement(Title,null),
    React.createElement(Overall,null),
    React.createElement(Next, null),
    React.createElement(footer, null)
);

// EXAMPLE***EXAMPLE****EXAMPLE

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var cardContainer = document.querySelector('.react-card');

// React component for form inputs

var CardInput = function (_React$Component) {
	_inherits(CardInput, _React$Component);
	
	function CardInput() {
		_classCallCheck(this, CardInput);
		
		return _possibleConstructorReturn(this, (CardInput.__proto__ || Object.getPrototypeOf(CardInput)).apply(this, arguments));
	}
	
	_createClass(CardInput, [{
													 key: 'render',
													 value: function render() {
													 return React.createElement(
																											'fieldset',
																											null,
																											React.createElement('input', { name: this.props.name, id: this.props.id, type: this.props.type || 'text', placeholder: this.props.placeholder, required: true })
																											);
													 }
													 }]);
	
	return CardInput;
}(React.Component);

// React component for textarea


var CardTextarea = function (_React$Component2) {
	_inherits(CardTextarea, _React$Component2);
	
	function CardTextarea() {
		_classCallCheck(this, CardTextarea);
		
		return _possibleConstructorReturn(this, (CardTextarea.__proto__ || Object.getPrototypeOf(CardTextarea)).apply(this, arguments));
	}
	
	_createClass(CardTextarea, [{
															key: 'render',
															value: function render() {
															return React.createElement(
																												 'fieldset',
																												 null,
																												 React.createElement('textarea', { name: this.props.name, id: this.props.id, placeholder: this.props.placeholder, required: true })
																												 );
															}
															}]);
	
	return CardTextarea;
}(React.Component);

// React component for the front side of the card


var CardFront = function (_React$Component3) {
	_inherits(CardFront, _React$Component3);
	
	function CardFront() {
		_classCallCheck(this, CardFront);
		
		return _possibleConstructorReturn(this, (CardFront.__proto__ || Object.getPrototypeOf(CardFront)).apply(this, arguments));
	}
	
	_createClass(CardFront, [{
													 key: 'render',
													 value: function render(props) {
													 return React.createElement(
																											'div',
																											{ className: 'card-side side-front' },
																											React.createElement(
																																					'div',
																																					{ className: 'card-side-container' },
																																					React.createElement(
																																															'h2',
																																															{ id: 'trans' },
																																															this.props.text
																																															)
																																					)
																											);
													 }
													 }]);
	
	return CardFront;
}(React.Component);

// React component for the back side of the card


var CardBack = function (_React$Component4) {
	_inherits(CardBack, _React$Component4);
	
	function CardBack() {
		_classCallCheck(this, CardBack);
		
		return _possibleConstructorReturn(this, (CardBack.__proto__ || Object.getPrototypeOf(CardBack)).apply(this, arguments));
	}
	
	_createClass(CardBack, [{
													key: 'render',
													value: function render(props) {
													return React.createElement(
																										 'div',
																										 { className: 'card-side side-back' },
																										 React.createElement(
																																				 'div',
																																				 { className: 'card-side-container' },
																																				 React.createElement(
																																														 'h2',
																																														 { id: 'congrats' },
																																														 this.props.text
																																														 )
																																				 )
																										 );
													}
													}]);
	
	return CardBack;
}(React.Component);

// React component for the card (main component)


var Card = function (_React$Component5) {
	_inherits(Card, _React$Component5);
	
	function Card() {
		_classCallCheck(this, Card);
		
		return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
	}
	
	/*
	 var FlipCard = function (_React$Component4) {
	 _inherits(FlipCard, _React$Component4);
	 
	 function FlipCard() {
	 _classCallCheck(this, FlipCard);
	 
	 return _possibleConstructorReturn(this, (FlipCard.__proto__ || Object.getPrototypeOf(FlipCard)).apply(this, arguments));
	 }
	 
	 _createClass(FlipCard, [{
	 key: 'render',
	 value: function render(props) {
	 return React.createElement(
	 'div',
	 { className: 'flip-card' },
	 React.createElement(
	 'div',
	 { className: 'flip-card' },
	 React.createElement(
	 'h2',
	 { id: 'flipped' },
	 this.props.text
	 )
	 )
	 );
	 }
	 }]);
	 
	 return FlipCard;
	 }(React.Component);*/
	
	// Actual card
	_createClass(Card, [{
			key: 'render',
			value: function render() {
			return React.createElement(
			 'div',
			{ className: 'card-container' },
			React.createElement(
			 'div',
			 { className: 'card-body' },
			 React.createElement(CardBack, { text: 'CORRECT!', id: "test" }),
			 React.createElement(CardFront, { text: 'Phrase' }),
			 //   React.createElement(CardBack, { text: 'Test' })
			 )
			 );
				}
	}]);
	
	
	return Card;
}(React.Component);

// Render Card component


ReactDOM.render(React.createElement(Card, null), cardContainer);

/*
 var card = document.getElementById('card');
 
 card.addEventListener('click', function() {
 if (!this.classList.contains('on')) {
 this.classList.remove('off');
 this.classList.add('on');
 } else {
 this.classList.remove('on');
 this.classList.add('off');
 }
 });*/


ReactDOM.render(
    main, document.getElementById('root')
);
