/* eslint-disable no-unused-vars */
import {connect} from "react-redux";
import React from "react";
import SignInForm from "./SignInForm";
import { login } from "../../actions/auth_actions";

const SignInFormCon = props =>
	<SignInForm 
		{...props}
		login={props.login}/>;


export default connect(null, {login})(SignInFormCon);