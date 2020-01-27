
class HelloWorld extends React.Component {

	getCurrentDateTime() {
		var rightNow = new Date(); 

		return rightNow.getMonth() + '-' + 
		rightNow.getDate() + '-' + 
		rightNow.getFullYear() + ' ' + 
		rightNow.getHours() + ':' + 
		rightNow.getMinutes() + ':' + 
		rightNow.getSeconds();

	}
	

	render() {
			const continents = 
			['Africa', 'Antartica', 'Asia', 
			'Australia', 'Europe', 'North America', 'South America'];

			const helloContinents = Array.from(continents, c => `Hello ${c}!`);
			const message = helloContinents.join(' ');

			return (
				<div title="Outer div">
					<div>
					<h1>{message}</h1>
					<p>The current date and time are: { this.getCurrentDateTime() }
					</p>
					</div>
					<div>
						<p>div 2</p>
					</div>
				</div>

			);

	}

}

const element = <HelloWorld />;

ReactDOM.render(element, document.getElementById('contents'));