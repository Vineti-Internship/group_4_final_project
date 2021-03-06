/* eslint-disable no-unused-vars */
import NewFlightForm from "./NewFlightForm";
import {connect} from "react-redux";
import React from "react";
import * as lanesActionCreators from "../../actions/lanes_actions";
import * as airplanesActionCreators from "../../actions/airplanes_actions";
import * as flightActionCreators from "../../actions/flight_actions";
import {loadAllFlights} from "../../actions/flights_actions";

const NewFlightFormCon = props => 
	<NewFlightForm 
		{...props} 
		lanes={props.foundLanes} 
		findLanes={props.findLanes} 
		airplanes={props.foundAirplanes}
		findAirplanes={props.findAirplanes}
		createFlight={props.createFlight}
		loadAllFlights={props.loadAllFlights}/>;


const mapStateToProps= state => ({
	foundLanes: state.lanes.foundLanes,
	foundAirplanes: state.airplanes.foundAirplanes,
});


export default connect(mapStateToProps, {loadAllFlights,...lanesActionCreators, ...airplanesActionCreators, ...flightActionCreators})(NewFlightFormCon);