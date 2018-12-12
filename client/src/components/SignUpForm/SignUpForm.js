import React from "react";

class SignUpForm extends React.Component {
	render() {
		return (
			<div className="sign-up-form">
				<h1>Registration</h1>
				<form>
					<label>Full Name:</label>
					<input type="text" name="name"/>
					<br/>
					<label>Email:</label>
					<input type="email" name="email"/>
					<br/>
					<label>Password:</label>
					<input type="password" name="password"/>
					<br/>
					<label>Confirm Password:</label>
					<input type="password" name="password_confirmation"/>
					<br/>
					<button>Cancel</button>
					<button>Register</button>
				</form>
			</div>
		);
	}
}

export default SignUpForm;
