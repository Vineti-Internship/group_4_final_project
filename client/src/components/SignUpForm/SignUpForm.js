import React from "react";

class SignUpForm extends React.Component {
	constructor(props){
		super(props);
		this.state={
			name:"",
			email:"",
			password:"",
			password_confirmation:"",
			fireRedirect:false			
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleCreateUser = this.handleCreateUser.bind(this);
	}

	handleChange(e){
		const {name, value} = e.target;
		this.setState({
			[name]: value
		});
	}

	handleCreateUser(e){
		e.preventDefault();
		this.props.createUser(this.state);
	}

	render() {
		return (
			<div className="sign-up-form">
				<h1>Registration</h1>
				<form onSubmit={this.handleCreateUser}>
					<label>Full Name:</label>
					<input type="text" name="name" required onChange={this.handleChange}/>
					<br/>
					<label>Email:</label>
					<input type="email" name="email" required onChange={this.handleChange}/>
					<br/>
					<label>Password:</label>
					<input type="password" name="password" required onChange={this.handleChange}/>
					<br/>
					<label>Confirm Password:</label>
					<input type="password" name="password_confirmation" required onChange={this.handleChange}/>
					<br/>
					<button>Cancel</button>
					<button type="submit">Register</button>
				</form>
			</div>
		);
	}
}

export default SignUpForm;
