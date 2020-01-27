"use strict";

var continents = ['Africa', 'Antartica', 'Asia', 'Australia', 'Europe', 'North America', 'South America'];
var helloContinents = Array.from(continents, function (c) {
  return "Hello ".concat(c, "!");
});
var message = helloContinents.join(' ');

function getCurrentDateTime() {
  var rightNow = new Date();
  return rightNow.toLocaleString();
}

var element = React.createElement("div", {
  title: "Outer div"
}, React.createElement("h1", null, message), React.createElement("p", null, "The current date and time are: ", getCurrentDateTime()));
ReactDOM.render(element, document.getElementById('contents'));