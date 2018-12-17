import React from "react";
import {Link} from "react-router-dom";
export default class Profile extends React.Component {	
	componentDidMount() {
		this.props.getUserInfo();
	}

	capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

	normalizeTime = str => 
		`${new Date(str).toISOString().split('T')[0]}\t\t${new Date(str).toISOString().split('T')[1].slice(0,8)}`

	render () {
		const {user} = this.props;
		const role = user.role === "client"? "Zvartnots client": user.role === "l_manager"?"Lane manager of Zvartnots": user.role ==="f_manager"?"Flight manager of Zvartnots":"Administrator of Zvartnots"
			return (
       <center>
				<div className="profile" style={{width:"40rem"}}>
					<div class="jumbotron">
            <h1 class="display-4 profile">User Info</h1>
            <p class="lead">role: {role}</p>
            <hr class="my-4"/>
						<div>name: <h3>{user.name}</h3></div>
						<div>email: <h4 className="user-email">{user.email}</h4></div>
         </div>
					<div>
					{(user.flights) && 
							<div className="flights" style={{width:"40rem"}}>
										{user.flights.map(flight => {
											return (
												<div className="card" key={flight.id} style={{width:"18rem", display:"inline-block", backgroundColor:"rgb(245, 245, 245)"}}>
													<div className="card-body">
														<h5 className={`card-title-${flight.id}`}>Flight N {flight.id}</h5>
														<p className={`card-from-to-${flight.id}`}>{this.capitalize(flight.from)} - {this.capitalize(flight.to)}</p>
														<p className={`card-time-${flight.id}`}>{this.normalizeTime(flight.flight_start)} - {this.normalizeTime(flight.flight_end)}</p>
														<Link to={`/flights/${flight.id}`} className={`card-link btn-more btn btn-primary`}>More</Link>
													</div>
												</div>
											);
										})}
							</div>				
					}
					</div>
				</div>
			</center>
			);	
	}
}




