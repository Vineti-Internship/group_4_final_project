import {connect} from "react-redux";
import Lanes from "./lanes";
import React from "react";
import * as lanesActions from "../../actions/lanes_actions";
import * as laneMaxCountsActions from "../../actions/lane_max_count_actions";

const LanesConnect = (props) =>
  (
    <Lanes
      {...props}
      lanes = {props.lanes}
      getLanes = {props.allLanes}
      laneMaxCount = {props.maxCount}
      getMaxCount = {props.getMaxCount}
    />
  )

const mapStateToProps = state => {
return ({
  lanes: state.lanes.allLanes,
   maxCount: state.laneMaxCount.maxCount
});
}
export default connect(mapStateToProps, { ... lanesActions, ...laneMaxCountsActions })(LanesConnect);