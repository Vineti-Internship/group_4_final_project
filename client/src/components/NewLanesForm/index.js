import NewLaneForm from "./new_lane_form";
import {connect} from "react-redux";
import React from "react";
import * as lanesActions from "../../actions/lanes_actions";

const NewLaneFormCon = props => 
	<NewLaneForm 
		{...props} 
    createLane = { props.createLane}
    updateLane = { props.updateLane}
		getLane = { props.getCurrentLane }
    />;
    
const mapStateToProps = state => ({
  createLane: state.lanes.createLane,
  updateLane: state.lanes.updateLane,
  lane: state.lanes.currentLane
});

export default connect(mapStateToProps, lanesActions)(NewLaneFormCon);