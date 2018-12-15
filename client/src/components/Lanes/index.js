import {connect} from "react-redux";
import Lanes from "./lanes";
import React from "react";
import * as lanesActions from "../../actions/lanes_actions";

const LanesConnect = (props) => {
	return <Lanes {...props} lanes={props.lanes} getLanes={props.allLanes}/>;
};

const map = state => ({
lanes: state.lanes.allLanes
});

export default connect(map, lanesActions)(LanesConnect);