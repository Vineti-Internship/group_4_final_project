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

export const searchFlights = (to) => async dispatch => {
	console.log(to);
	const res = await axios.post("/flights/search",{to});
	console.log(res);
	const search_result = await res.data;
	dispatch(getSearchResult(search_result));
};

export const getSearchResult = (search_result) => {
	return {
		type: actionTypes.SEARCH_FLIGHTS,
		search_result
	};
};