import React from 'react';
//import $ from 'jquery';

var Login = React.createClass({
	// getInitialState: function(){
	// 	return {username: '', password: null}
	// },
	// updateUsername: function(event){
	// 	this.setState({username: event.target.value})
	// },
	// updatePassword: function(event){
	// 	this.setState({password: event.target.value})
	// },
	// submitLogin: function(event){
	// 	e.preventDefault()
	// 	$.ajax({
	// 		method: 'POST',
	// 		url:
	// 	})
	// }
	render: function(){
		return(
			<div>
				<h2>_login or sign up</h2>
				<hr />
				<div className="form">

				<h3>Please login if you have an account.</h3>
				<br />

					<input
					className="input"
					type="text"
					placeholder="username"
					/>

					<br />

					<input
					className="input"
					type="text"
					placeholder="password"
					/>

					<br />
					<br />

					<button
					className="button"
					type="submit"
					>Login</button>

				</div>
				<br />

				<div className="form">
				<h3>Please sign up below if you are a new user.</h3>

				<br />
					<input
					className="input"
					type="text"
					placeholder="email"
					/>

					<br />

					<input
					className="input"
					type="text"
					placeholder="username"
					/>

					<br />

					<input
					className="input"
					type="text"
					placeholder="password"
					/>

					<br />
					<br />

					<button
					className="button"
					type="submit"
					>Sign Up</button>
				</div>
			</div>
		)
	}
})

export default Login;