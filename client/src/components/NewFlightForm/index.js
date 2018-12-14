/* eslint-disable no-unused-vars */
import NewFlightForm from "./NewFlightForm";
import {connect} from "react-redux";
import React from "react";
import * as lanesActionCreators from "../../actions/lanes_actions";
import * as airplanesActionCreators from "../../actions/airplanes_actions";

const NewFlightFormCon = props => 
	<NewFlightForm 
		{...props} 
		lanes={props.foundLanes} 
		findLanes={props.findLanes} 
		airplanes={props.foundAirplanes}
		findAirplanes={props.findAirplanes}/>;

const mapStateToProps= state => ({
	foundLanes: state.lanes.found_lanes,
	foundAirplanes: state.airplanes.found_airplanes
});

export default connect(mapStateToProps, {...lanesActionCreators, ...airplanesActionCreators})(NewFlightFormCon);