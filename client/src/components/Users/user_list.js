import React from "react";
// import {Link} from "react-router-dom";
import Spinner from "../Spinner";

export default class Users extends React.Component {
  componentWillMount() {
		this.props.getUsers();
	}
	render() {
    const { history } = this.props;
    if( this.props.users)
			return (
        <div className="users">
        <br/>
        <br/>
					<table className="table table-striped table-bordered table-hover">
            <thead className="thead-dark">
							<tr>
                <th>Id</th>
                <th>Name </th>
								<th>Email </th>
								<th>Role</th>
							</tr>
              </thead>
              <tbody>
							{this.props.users.map(user => {
								return (
									<tr key={user.id} onClick={()=> history.push(`/users/${user.id}`)} style={{cursor:"pointer"}}>
										<th>{user.id}</th>	
                    <th>{user.name}</th>
                    <th>{user.email}></th>
                    <th>{user.role}</th>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
      );
      return <Spinner/>;
	}
}
