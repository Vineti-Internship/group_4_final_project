import React from "react";
import Spinner from "../Spinner";

export default class Profile extends React.Component {	
	componentDidMount() {
		this.props.getUserInfo();
	}

	render () {
		const user = {...this.props.user};
		if(user)
			return (
				<div className="profile">
					<h2>User Info</h2>
					<div className="form-group">
						<div>name: <p className="profile-name">{user.name}</p></div>
						<div>email: <p className="profile-email">{user.email}</p></div>
						<div>role: <p className="profile-role">{user.role}</p></div>
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
		return <Spinner/>;
	}
}