import {connect} from "react-redux";
import Airplanes from "./airplanes_list";
import React from "react";
import * as airplanesActionCreators from "../../actions/airplanes_actions";

const AirplaneCon = (props) => {
	return <Airplanes {...props} airplanes={props.airplanes} getAirplanes={props.allAirplanes}/>;
};

const mapStateToProps = state => ({
airplanes: state.airplanes.allAirplanes
});

export default connect(mapStateToProps, airplanesActionCreators)(AirplaneCon);