import * as actionTypes from "./types";
import axios from "axios";

export const loadFlights = () => async dispatch => {
	const res = await axios.get("/flights");
	const flights = res.data;
	dispatch(getFlights(flights));
}; 

export const getFlights = (flights) => {
	return {
		type: actionTypes.GET_FLIGHTS, 
		payload: flights
	};
};