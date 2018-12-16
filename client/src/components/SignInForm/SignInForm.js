import React from "react";
import { validate } from "../../helpers/validations/validateSignin";
import { isEmpty } from "../../helpers/validations/validateSignin";
import Auth from "../../Auth";
 
export default class SignInForm extends React.Component {
  constructor(){
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
      isLoading: false,
      authError: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, authError:false })
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
  async handleSubmit(e) {
    e.preventDefault();
    const {email, password} = this.state;  
    if(this.isValid()) {
      this.setState({ errors: {}, isLoading: true });  
      const reqdata = {
        email,
        password
      }
      await this.props.login(reqdata);
      if(Auth.isUserAuthenticated()){
        this.props.history.push("/")
      }
      this.setState({
        authError: true,
        password:""
      });    
    }
  }

	render() {      
    const { email, password, isLoading, errors, authError } = this.state;    
		return (
      <center>
        <div align="center" className="col-md-6 col-md-offset-3">
          <h1 className="signin-header">Sign in</h1>
          <form name="sign-in-form" onSubmit={this.handleSubmit} style={{width:"30rem"}}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
								<span className="input-group-text" id="inputGroup-sizing-default">Email</span>
							</div>
              <input type="email" name="email" className="form-control" value={email} onChange={this.handleChange}/>        
						  {!isLoading && !email && <label style={{color:"red"}}>{errors.email}</label>}
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
								<span className="input-group-text" id="inputGroup-sizing-default">Password</span>
							</div>
              <input type="password" name="password" className="form-control" value={password} onChange={this.handleChange}/>
						  {!isLoading && !password && <label style={{color:"red"}}>{errors.password}</label>}
            </div>
            {authError && <label style={{color:"red"}}>{this.props.error}</label> }
            <div className="form-group">
              <button type="submit" className="btn btn-success btn-lg" >Sign in</button>            
            </div>
          </form>
        </div>
      </center>
    );    
	}
}