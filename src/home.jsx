import React from 'react';

var Home = React.createClass({
	render: function () {
		return (
			<div>
				<hr />
				<h2 className="title">_hello, there!</h2>
				
				<img className="welcome" src={require('../imgs/home.jpg')} />
			</div>
		)
	}
})

export default Home;