import NewLaneForm from "./new_lane_form";
import {connect} from "react-redux";
import React from "react";
import * as lanesAction from "../../actions/lanes_actions";

const NewLaneFormCon = props => 
	<NewLaneForm 
		{...props} 
    createLane = { props.createLane} />;
    
const mapStateToProps = state => ({
  createLane: state.lanes.createLane
});

export default connect(mapStateToProps, lanesAction)(NewLaneFormCon);