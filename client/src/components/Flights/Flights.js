import React from "react";

class Flights extends React.Component {
	render() {
		return (
			<div className="flights">
				<table>
					<tbody>
						<tr>
							<th>Flight No</th>
							<th>Origination airport</th>
							<th>Airline</th>
							<th>Scheduled departure</th>
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


				<button onClick={this.props.handleClick}>CLick me</button>
			</div>
		);
	}
}

export default Flights;
