import * as actionTypes from "./types";
import axios from "axios";

export const findLanes = (data) => async dispatch => {
	try {
		const res = await axios.post("/lanes/find", {...data});
		const lanes = await res.data;
		dispatch(getFoundLanes(lanes));
	} 
	catch (err) {
		// eslint-disable-next-line no-console
		console.log(err);
	}
};

export const getFoundLanes = (lanes) => {
	return {
		type: actionTypes.FIND_LANES,
		payload:lanes
	};
};