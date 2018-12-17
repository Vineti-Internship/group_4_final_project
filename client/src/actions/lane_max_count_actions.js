import * as actionTypes from "./types";
import axios from "axios";

export const getMaxCount = () => async dispatch => {
  const res = await axios.get("/lane_max_counts");
  const laneMaxCount = res.data;
	dispatch(getLaneMaxCount(laneMaxCount));
};

export const getLaneMaxCount = (laneMaxCount) => {
	return {
		type: actionTypes.GET_MAX_COUNT,
    payload: laneMaxCount
	};
};