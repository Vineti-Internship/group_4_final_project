import React from "react";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";

class Flights extends React.Component {
	componentWillMount() {
		this.props.getFlights();
	}

	render() {
		if(this.props.flights)
			return (
				<div className="flights">
					<button onClick={this.props.getFlights} className="refresh-btn">Refresh</button>
					<table>
						<tbody>
							<tr>
								<th>Flight No</th>
								<th>| Origination airport |</th>
								<th>Airline</th>
								<th>| Scheduled departure |</th>
								<th>Scheduled arrival</th>
							</tr>
							{this.props.flights.map(flight => {
								return (
									<tr key={flight.id}>
										<th>{flight.id}</th>
										<th>{flight.to}</th>
										<th>{flight.airline_name}</th>
										<th>{flight.flight_start}</th>
										<th>{flight.flight_end}</th>
									</tr>
								);
							})}
						</tbody>
					</table>
					<Link to="/newflight" className="link-newflight">+ New Flight</Link>
				</div>
			);
		return <Spinner/>;
	}
}

export default Flights;
