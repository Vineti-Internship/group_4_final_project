import {connect} from "react-redux";
import Airplanes from "./airplanes_list";
import React from "react";
import * as airplanesActionCreators from "../../actions/airplanes_actions";

const AirplaneCon = (props) => {
	return <Airplanes {...props} airplanes={props.airplanes} getAirplanes={props.loadAllAirplanes}/>;
};

const mapStateToProps = state => ({
airplanes: state.airplanes.all_airplanes
});

export default connect(mapStateToProps, airplanesActionCreators)(AirplaneCon);