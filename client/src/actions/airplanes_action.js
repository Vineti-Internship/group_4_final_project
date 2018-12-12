import * as actionTypes from "./types";
import axios from "axios";

export const findAirplanes = (data) => async dispatch => {
	const res = await axios.post("/airplanes/find", {...data});
	const airplanes = await res.data;
	dispatch(getFoundAirplanes(airplanes));
};

export const getFoundAirplanes = (airplanes) => {
	return {
		type: actionTypes.FIND_AIRPLANES,
		payload:[...airplanes]
	};
};