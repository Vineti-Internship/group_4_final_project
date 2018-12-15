import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/auth_actions";
import { withRouter } from "react-router-dom";
import { getUserInfo } from "../../actions/profile_actions";


class Profile extends React.Component {	
	componentDidMount() {
		this.props.getUserInfo();
	}

	handleSignout = () => {	
		this.props.history.push("/");
		this.props.logout();
	}
  // id: 1, name: "Admin", email: "admin@mail.com", role: "admin", tickets: Array(0)
	render () {
		console.log("user", this.props.user);
		const { user } = this.props.user;

		return (
			<div className="profile">
				<button className="btn btn-primary btn-lg" onClick={this.handleSignout}>Sign out</button>            
				<h2>UserInfo</h2>
				<div className="form-group">
					<div>name: {user.name}</div>
					<div>email: {user.email}</div>
					<div>role: {user.role}</div>
				</div>
				<div>
					{/* {user.tickets.map(ticket => {
						return (
							<ul key={ticket.id}>
								<li>ticket</li>
							</ul>
						)
					})} */}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user
	};
}

export default withRouter(connect(mapStateToProps, { logout, getUserInfo })(Profile));