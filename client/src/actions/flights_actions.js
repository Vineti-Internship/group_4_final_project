import * as actionTypes from "./types";
import axios from "axios";

export const loadAllFlights = () => async dispatch => {
	const res = await axios.get("/flights");
	const flights = res.data;
	dispatch(getAllFlights(flights));
}; 

export const getAllFlights = (flights) => {
	return {
		type: actionTypes.GET_FLIGHTS, 
		payload: flights
	};
};