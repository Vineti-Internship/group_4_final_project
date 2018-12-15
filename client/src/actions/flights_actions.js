/* eslint-disable no-console */
import * as actionTypes from "./types";
import axios from "axios";

export const loadAllFlights = () => async dispatch => {
	try {
		const res = await axios.get("/flights");
		const flights = res.data;
		dispatch(getAllFlights(flights));
	} catch (err) {
		console.log(err);
	}
}; 

export const getAllFlights = (flights) => {
	return {
		type: actionTypes.GET_FLIGHTS, 
		payload: flights
	};
};

export const searchFlights = (data) => async dispatch => {
	try {
		const res = await axios.post("/flights/search",{...data});
		const search_result = await res.data;
		dispatch(getSearchResult(search_result));
	} catch (err) {
		console.log(err);
	}
};

export const getSearchResult = (search_result) => {
	return {
		type: actionTypes.SEARCH_FLIGHTS,
		payload: search_result
	};
};