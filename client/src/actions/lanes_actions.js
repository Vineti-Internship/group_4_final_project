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

export const allLanes = () => async dispatch => {
	const res = await axios.get("/lanes");
	const lanes = res.data;
	dispatch(getAllLanes(lanes));
};

export const getAllLanes = (lanes) => {
	return {
		type: actionTypes.GET_LANES,
		payload: lanes
	};
};

export const getCurrentLane = id => async dispatch => {
	try {
    const res = await axios.get(`/lanes/${id}`);
		const lane = res.data;
		dispatch(getLane(lane));
	} catch (error) {
		console.log(error);
	}
};

export const getLane = (lane) => {
	return {
		type: actionTypes.GET_CURRENT_LANE,
		payload: lane
	};
};

export const createLane = data => async dispatch => {
  try {
		await axios.post("/lanes", { ... data } );
		dispatch({
			type: actionTypes.CREATE_LANE
		});
	} catch (error) {
		console.log(error);
	}
};

export const updateLane = (id, data) => async dispatch => {
  try {
		await axios.put(`/lanes/${id}`, { ... data } );
		dispatch({
			type: actionTypes.UPDATE_LANE
		});
	} catch (error) {
		console.log(error);
	}
};
