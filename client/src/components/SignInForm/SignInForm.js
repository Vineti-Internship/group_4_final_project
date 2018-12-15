import React from "react";
import { validate } from "../../helpers/validations/validateSignin";
import { isEmpty } from "../../helpers/validations/validateSignin"

export default class SignInForm extends React.Component {
  state = {
    email: "",
    password: "",
    errors: {},
    isLoading: false,
  }
  
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  isValid = () => {
    const obj = validate(this.state);
    const isValid = obj.isValid;
    const errors = obj.errors;

    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    
    if(this.isValid()) {
      this.setState({ errors: {}, isLoading: true });  
      const reqdata = {
        email,
        password
      }
      this.props.login(reqdata);
      this.props.history.push("/")
    }
  }

	render() {  
    const { email, password, isLoading, identifier, errors } = this.state;
		return (
      <center>
        <div align="center" className="col-md-6 col-md-offset-3">
          <h2>Sign in</h2>
          <form name="signinform" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.handleChange}/>
              {!isLoading && !email &&
                <div className="help-block">{this.state.errors.email}</div>
              }
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" className="form-control" value={password} onChange={this.handleChange}/>
              {!isLoading && !password &&
                <div className="help-block">{errors.password}</div>
              }
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-lg" >Sign in</button>            
            </div>
          </form>
        </div>
      </center>
		);
	}
}