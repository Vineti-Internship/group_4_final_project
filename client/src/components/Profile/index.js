/* eslint-disable no-unused-vars */
import {connect} from "react-redux";
import Profile from "./Profile";
import React from "react";
import * as usersActions from "../../actions/users_actions";

const ProfileCon = (props) => {
	return <Profile {...props} getUserInfo={props.getUserInfo} user={props.user}/>;
};

function mapStateToProps(state) {
	return {
		user: state.users.user
	};
}

export default connect(mapStateToProps, usersActions)(ProfileCon);