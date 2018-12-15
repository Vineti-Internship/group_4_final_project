/* eslint-disable no-unused-vars */
import {connect} from "react-redux";
import React from "react";
import * as usersActionCreators from "../../actions/users_actions";
import SignUpForm from "./SignUpForm";

const SignUpFormCon = props =>
	<SignUpForm 
		{...props} 
		createUser={props.createUser} 
		status={props.status}/>;


const mapStateToProps= state => ({
	status:state.users.status
});

export default connect(mapStateToProps, usersActionCreators)(SignUpFormCon);