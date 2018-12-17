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

export const allAirplanes = () => async dispatch => {
	const res = await axios.get("/airplanes");
	const airplanes = res.data;
	dispatch(getAllAirplanes(airplanes));
};

export const getAllAirplanes = (airplanes) => {
	return {
		type: actionTypes.GET_AIRPLANES,
		payload: airplanes
	};
};

export const createAirplane = data => async dispatch => {
  try {
		await axios.post("/airplanes", { ... data } );
		dispatch({
			type:actionTypes.CREATE_AIRPLANE
		});
	} catch (error) {
		console.log(error);
	}
};