/* eslint-disable no-unused-vars */
import {connect} from "react-redux";
import Flight from "./Flight";
import React from "react";
import * as flightActionCreators from "../../actions/flight_actions";

const FlightCon = props => 
	<Flight 
		{...props} 
		flight={props.flight} 
		getFlight={props.loadCurrentFlight} 
		errorCode={props.errorCode}/>;

const mapStateToProps= state => ({
	flight:state.flights.current_flight,
	errorCode:state.flights.error_code
});

export default connect(mapStateToProps, flightActionCreators)(FlightCon);