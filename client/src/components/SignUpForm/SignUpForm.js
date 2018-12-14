import React from "react";

class SignUpForm extends React.Component {
	constructor(props){
		super(props);
		this.state={
			name:"",
			email:"",
			password:"",
			password_confirmation:"",
			invalidEmail:false,
			shortPassword:false,
			didntMatchPassword:false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleCreateUser = this.handleCreateUser.bind(this);
		this.handleCancelClick = this.handleCancelClick.bind(this);
	}

	handleChange(e){
		const {name, value} = e.target;
		this.setState({
			[name]: value,
			invalidEmail:false,
			shortPassword:false,
			didntMatchPassword:false
		});
	}
	/*eslint indent: [2, "tab", {"SwitchCase": 1}]*/
	async handleCreateUser(e){
		e.preventDefault();
		await this.props.createUser(this.state);
		this.setState({password:"", password_confirmation:""});
		if(this.props.status.length !== 0)
			this.props.status.forEach(message => {
				switch(message){
					case "Password confirmation doesn't match Password":
						this.setState({didntMatchPassword:true});
						break;
					case "Password confirmation is too short (minimum is 6 characters)":
						this.setState({shortPassword:true});
						break;
					case "Email has already been taken":
						this.setState({invalidEmail:true});
						break;
				}
			});
		else{
			alert("You have successfully registered!");
			this.props.history.push("/");
		}
	}

	handleCancelClick(e){
		e.preventDefault();

		this.props.history.push("/");
	}

	render() {
		return (
			<div className="sign-up-form">
				<h1 className="registration-header">Registration</h1>
				<center>
					<form onSubmit={this.handleCreateUser} style={{width:"30rem"}}>
						{
							/* 
							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<span className="input-group-text" id="inputGroup-sizing-default">Default</span>
								</div>
								<input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
							</div> 
		*/}
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="inputGroup-sizing-default">Full Name:</span>
							</div>
							<input type="text" name="name" required onChange={this.handleChange} value={this.state.name} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
						</div>

						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="inputGroup-sizing-default">Email:</span>
							</div>
							<input type="email" name="email" required onChange={this.handleChange} value={this.state.email} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
						</div>

						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="inputGroup-sizing-default">Password:</span>
							</div>
							<input type="password" name="password" required onChange={this.handleChange} value={this.state.password} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
						</div> 

						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="inputGroup-sizing-default">Confirm Password:</span>
							</div>
							<input type="password" name="password_confirmation" required onChange={this.handleChange} value={this.state.password_confirmation} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
						</div>
						{this.state.invalidEmail && <label style={{color:"red"}} className="email-taken-lbl">Email has already been taken</label>}
						{this.state.invalidEmail && <br/>}
						{this.state.shortPassword && <label style={{color:"red"}} className="password-short-lbl">Password is too short (minimum is 6 characters)</label>}
						{this.state.shortPassword && <br/>}
						{this.state.didntMatchPassword && <label style={{color:"red"}} className="password-didnt-match-lbl">Passwords did not match</label>}
						{this.state.didntMatchPassword && <br/>}
						<button onClick={this.handleCancelClick} className="cancel-btn btn btn-danger">Cancel</button>
						{"\t"}
						<button type="submit" className="submit-btn btn btn-success">Register</button>
					</form>
				</center>
			</div>
		);
	}
}

export default SignUpForm;
