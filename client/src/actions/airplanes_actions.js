import * as actionTypes from "./types";
import axios from "axios";

export const findAirplanes = (data) => async dispatch => {
	try {
		const res = await axios.post("/airplanes/find", {...data});
		const airplanes = await res.data;
		dispatch(getFoundAirplanes(airplanes));
	} 
	catch (err) {
		// eslint-disable-next-line no-console
		console.log(err);
	}
};

export const getFoundAirplanes = (airplanes) => {
	return {
		type: actionTypes.FIND_AIRPLANES,
		payload:airplanes
	};
};