/* eslint-disable no-console */
import * as actionTypes from "./types";
import axios from "axios";

export const loadCurrentFlight = id => async dispatch => {
	try {
		const res = await axios.get(`/flights/${id}`);
		const flight = res.data;
		dispatch(getFlight(flight));
	} catch (err) {
		dispatch(notFound());
	}
}; 

export const getFlight = (flight) => {
	return {
		type: actionTypes.GET_CURRENT_FLIGHT, 
		payload: flight
	};
};

export const notFound = () => {
	return {
		type:actionTypes.FLIGHT_NOT_FOUND
	};
};

export const createFlight = data => async dispatch => {
	try {
		await axios.post("/flights",{flight:{...data}});
		dispatch({
			type:actionTypes.CREATE_FLIGHT
		});
	} catch (error) {
		console.log(error);
	}

};