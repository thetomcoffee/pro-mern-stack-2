function getCurrentDateTime() {
			var rightNow = new Date(); 
				return rightNow.getMonth() + '-' + 
				rightNow.getDate() + '-' + 
				rightNow.getFullYear() + ' ' + 
				rightNow.getHours() + ':' + 
				rightNow.getMinutes() + ':' + 
				rightNow.getSeconds();

	}
		const element = (
			<div title="Outer div">
				<h1>Hello World!</h1>
				<p>The current date and time are: { getCurrentDateTime() 
				}</p>
			</div>
		);
		ReactDOM.render(element, 
			document.getElementById('contents'));