/* eslint-disable no-unused-vars */
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
					<button onClick={this.props.getFlights} style={{float:"right"}} className="refresh-btn btn btn-primary">Refresh</button>
					<br/>
					<br/>
					<table className="table table-striped table-bordered table-hover">
						<thead className="thead-dark">
							<tr>
								<th scope="col">Flight No</th>
								<th scope="col">Origination airport</th>
								<th scope="col">Airline</th>
								<th scope="col">Scheduled departure</th>
								<th scope="col">Scheduled arrival</th>
							</tr>
						</thead>
						<tbody>
							{this.props.flights.map(flight => {
								return (
									<tr key={flight.id}>
										<th scope="col">{flight.id}</th>
										<td>{flight.to}</td>
										<td>{flight.airline_name}</td>
										<td>{flight.flight_start}</td>
										<td>{flight.flight_end}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
					{this.props.aud==="f_manager" && <Link to="/newflight" style={{float:"left"}} className="link-newflight btn btn-primary">+ New Flight</Link>}
				</div>
			);
		return <Spinner/>;
	}
}

export default Flights;
