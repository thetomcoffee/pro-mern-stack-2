function getCurrentDateTime() {
  var rightNow = new Date();
  return rightNow.getMonth() + '-' + rightNow.getDate() + '-' + rightNow.getFullYear() + ' ' + rightNow.getHours() + ':' + rightNow.getMinutes() + ':' + rightNow.getSeconds();
}

const element = React.createElement("div", {
  title: "Outer div"
}, React.createElement("h1", null, "Hello World!"), React.createElement("p", null, "The current date and time are: ", getCurrentDateTime()));
ReactDOM.render(element, document.getElementById('contents'));