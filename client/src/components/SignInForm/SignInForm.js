import React from "react";
import { connect } from "react-redux";
import { validate } from "../../helpers/validations/validateSignin";
import { isEmpty } from "../../helpers/validations/validateSignin"
import { login } from "../../actions/auth_actions";
class SignInForm extends React.Component {
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
    console.log("errrrors", errors);

    if (!isValid) {
      this.setState({ errors });
    }

    console.log("state", this.state.errors);
    

    return isValid;
  }

  handleSubmit = (e) => {

    e.preventDefault();
    console.log("result", this.isValid());
    const {email, password} = this.state;
    const valid =  this.isValid();
    console.log("valid", valid);
    
    if(this.isValid()) {
      this.setState({ errors: {}, isLoading: true });  
      const reqdata = {
        email,
        password
      }
      this.props.login(reqdata);
      // .then(
      //   (res) => {
      //   // this.context.router.push("/");
      //   console.log("res", res);
      //    },
      //   (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
      // );
    }
    console.log(validate(this.state))
    console.log("email", email, "password", password);  
    console.log("errors", this.state.errors);
     
  }

  

	render() {  
    // console.log("state", this.state.errors);
    console.log("this.props", this.props);
    


    const { email, password, isLoading, identifier, errors } = this.state;
		return (
			<div className="col-md-6 col-md-offset-3">
				<h2>Sign in</h2>
				<form name="form" onSubmit={this.handleSubmit}>
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
            <button className="btn btn-primary btn-lg" disabled={isLoading}>Sign in</button>            
          </div>
				</form>
			</div>
		);
	}
}


// const mapStateToProps = state => ({
//   currentUser: state.user
// })

// const mapStateToProps = (state) => {
//   return { errorMessage: state.auth.error };
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     SignIn: (data) => {
//       dispatch(SignIn(data));
//     }
//   }
// }
// SignInForm.propTypes = {
//   SignIn: React.PropTypes.func.isRequired
// }

// SignInForm.contextTypes = {
//   router: React.PropTypes.object.isRequired
// }
// export default connect(null, {SignIn})(SignInForm);
const mapStateToProps = (state) => {
  return { errorMessage: state.auth.error };
}
export default connect(null, {login})(SignInForm);