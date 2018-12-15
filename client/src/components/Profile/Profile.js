import React from "react";

export default class Profile extends React.Component {	
	componentDidMount() {
		this.props.getUserInfo();
	}

	render () {
		const { user } = this.props.user;

		return (
			<div className="profile">
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