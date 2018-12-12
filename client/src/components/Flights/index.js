import {connect} from "react-redux";
import Flights from "./Flights";
import React from "react";
import * as flightsActionCreators from "../../actions/flights_actions";

const FlightsCon = (props) => {
	return <Flights {...props} flights={props.flights} getFlights={props.loadAllFlights}/>;
};

const mapStateToProps= state => ({
	flights:state.flights.all_flights
});

export default connect(mapStateToProps, flightsActionCreators)(FlightsCon);