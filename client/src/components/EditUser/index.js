import EditUser from "./edit_user";
import {connect} from "react-redux";
import React from "react";
import * as usersActions from "../../actions/users_actions";


const EditUserFormCon = props => 
	<EditUser 
		{...props} 
    updateUser = { props.updateUser}
    getUserById = {props.getCurrentUser}
    />;
    
const mapStateToProps = state => ({
  updateUser: state.users.updateUser,
  user: state.users.currentUser
});

export default connect(mapStateToProps, usersActions)(EditUserFormCon);