import {connect} from "react-redux";
import Flights from "./Flights";
import React from "react";
import * as flightsActionCreators from "../../actions/flights_action";

const FlightsCon = (props) => {
	return <Flights flights={props.flights} getFlights={props.loadFlights}/>;
};

const mapStateToProps= state => ({
	flights:state.flights.all_flights
});

export default connect(mapStateToProps, flightsActionCreators)(FlightsCon);