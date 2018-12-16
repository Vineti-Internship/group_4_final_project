/* eslint-disable no-unused-vars */
import {connect} from "react-redux";
import Flights from "./Flights";
import React from "react";
import * as flightsActionCreators from "../../actions/flights_actions";

const FlightsCon = props => {
	return (
		<Flights 
			{...props} 
			aud={props.aud}
			flights={props.flights} 
			getFlights={props.loadAllFlights}/>
	);
};


const mapStateToProps= state => ({
	flights:state.flights.all_flights,
	aud: state.auth.aud
});

export default connect(mapStateToProps, flightsActionCreators)(FlightsCon);