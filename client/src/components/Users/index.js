import {connect} from "react-redux";
import Users from "./user_list";
import React from "react";
import * as usersActions from "../../actions/users_actions";

const UsersConnect = (props) => {
  return (<Users {...props}
   users={props.users}
  getUsers={props.allUsers}/>);
};

const mapStateToProps = state => ({
  users: state.users.allUsers
});

export default connect(mapStateToProps, usersActions)(UsersConnect);