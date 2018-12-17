import React from "react";
import {Link} from "react-router-dom";
import Spinner from "../Spinner";
export default class Profile extends React.Component {	
	componentDidMount() {
		this.props.getUserInfo();
	}

	capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

	normalizeTime = str => 
		`${new Date(str).toISOString().split('T')[0]}\t\t${new Date(str).toISOString().split('T')[1].slice(0,8)}`

	renderFlights = (flights) => {
		return flights.map(flight => {
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
		})
	}
		
		
	


	render () {
		console.log(this.props)
		
		const {user} = this.props;
		if(user){
			const role = user.role === "client"? "Zvartnots client": user.role === "l_manager"?"Lane manager of Zvartnots": user.role ==="f_manager"?"Flight manager of Zvartnots":"Administrator of Zvartnots"
			let presentFlights=[];	
			let pastFlights=[];
			console.log(user)
			if(user.flights)
				user.flights.forEach(flight=>{
					flight.is_ended? pastFlights.push(flight):presentFlights.push(flight);
				});
			
		
			return (
				<center>
					<div className="profile" style={{width:"40rem"}}>
						<div className="jumbotron">
							<h1 className="display-4 profile">User Info</h1>
							<p className="lead">role: {role}</p>
							<hr className="my-4"/>
							<div>name: <h3>{user.name}</h3></div>
							<div>email: <h4 className="user-email">{user.email}</h4></div>
					</div>
						<div>
						{(user.flights) && 
						<div className="flights">
							<div className="presentFlights" style={{width:"40rem"}}>
								<h3>Current flights</h3>
								{this.renderFlights(presentFlights)}
							</div>
							<hr/>
							<div className="pastFlights" style={{width:"40rem"}}>
								<h3>Archive</h3>
								{this.renderFlights(pastFlights)}
							</div>
						</div>				
						}
						</div>
					</div>
				</center>
				);
			
	}
	return <Spinner />
}


}

