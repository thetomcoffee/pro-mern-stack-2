const continents = 
['Africa', 'Antartica', 'Asia', 
'Australia', 'Europe', 'North America', 'South America'];

const helloContinents = Array.from(continents, c => `Hello ${c}!`);
const message = helloContinents.join(' ');

function getCurrentDateTime() {
			var rightNow = new Date(); 
			return rightNow.toLocaleString();
}

const element = (
	<div title="Outer div">
		<h1>{message}</h1>
		<p>The current date and time are: { getCurrentDateTime() }
        </p>
	</div>
);

ReactDOM.render(element, 
	document.getElementById('contents'));
