import * as actionTypes from "./type";

export const getFlights = () => async dispatch =>{
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const flights = await res.json();
	dispatch({
		type:actionTypes.getFlights,
		payload: flights
	});
}; 