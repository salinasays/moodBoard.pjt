import React from 'react';
import $ from 'jquery';

var Login = React.createClass({
	getInitialState: function(){
		return {username: '', password: null}
	},
	updateUsername: function(event){
		this.setState({username: event.target.value})
	},
	updatePassword: function(event){
		this.setState({password: event.target.value})
	},
	createUserLogin: function(event){
		e.preventDefault()
		$.ajax({
			method: 'POST',
			url: '/api/users'
		})
	},
	userLogin: function(event){
		e.preventDefault()
		$.ajax({
			method: 'GET',
			url: '/api/users'
		})
	},
	render: function(){
		return(
			<div>
				<hr />
				<h2 className="title">_login or sign up</h2>
				
				<div className="form">

				<h3>Please login if you have an account.</h3>
				<br />

				<form onSubmit={this.userLogin}>
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
				</form>

				</div>
				<br />

				<div className="form">
				<h3>Please sign up below if you are a new user.</h3>

				<br />

				<form onSubmit={this.createUserLogin}>
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
					</form>

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