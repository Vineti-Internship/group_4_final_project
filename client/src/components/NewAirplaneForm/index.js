import NewAirplaneForm from "./new_airplane_form";
import {connect} from "react-redux";
import React from "react";
import * as airplaneAction from "../../actions/airplanes_actions";

const NewAirplaneFormCon = props => 
	<NewAirplaneForm 
		{...props} 
		createAirplane={props.createAirplane}
    getAirlines={props.allAirlines}/>;

const mapStateToProps = state => ({
  createAirplane: state.airplanes.createAirplane
});
    
export default connect(mapStateToProps, airplaneAction)(NewAirplaneFormCon);