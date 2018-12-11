import React from "react";

class Flights extends React.Component {
	render() {
		return (
			<div className="flights">
				{this.props.flights && this.props.flights.map(flight => {
					return <h2 key={flight.id}>{flight.from}-{flight.to}</h2>;
				})}
				<button onClick={this.props.handleClick}>CLick me</button>
			</div>
		);
	}
}

export default Flights;
