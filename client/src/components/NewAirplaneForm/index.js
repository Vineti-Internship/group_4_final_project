import NewAirplaneForm from "./new_airplane_form";
import {connect} from "react-redux";
import React from "react";
import * as airplanesAction from "../../actions/airplanes_actions";
import * as airlinesAction from "../../actions/airlines_actions";

const NewAirplaneFormCon = props => 
	<NewAirplaneForm 
		{...props} 
    createAirplane = {props.createAirplane}
    airlines = {props.allAirlines}
    getAirlines = {props.getAirlines}/>;

const mapStateToProps = state => ({
  createAirplane: state.airplanes.createAirplane,
  allAirlines: state.airlines.allAirlines
});
    
export default connect(mapStateToProps, { ... airlinesAction, ... airplanesAction })(NewAirplaneFormCon);