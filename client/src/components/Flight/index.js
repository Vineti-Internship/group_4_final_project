/* eslint-disable no-unused-vars */
import {connect} from "react-redux";
import Flight from "./Flight";
import React from "react";
import * as flightActionCreators from "../../actions/flight_actions";
import {buyTicket} from "../../actions/ticket_actions";

const FlightCon = props => 
	<Flight 
		{...props} 
		flight={props.flight} 
		getFlight={props.loadCurrentFlight} 
		errorCode={props.errorCode}
		buyTicket={props.buyTicket}
		status={props.status}/>;

const mapStateToProps= state => ({
	flight:state.flights.current_flight,
	errorCode:state.flights.error_code,
	user: state.user,
	status: state.tickets.error
});

export default connect(mapStateToProps, {...flightActionCreators, buyTicket})(FlightCon);