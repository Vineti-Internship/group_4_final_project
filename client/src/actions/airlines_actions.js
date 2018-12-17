import * as actionTypes from "./types";
import axios from "axios";

export const getAirlines = () => async dispatch => {
	const res = await axios.get("/airlines");
	const airlines = res.data;
	dispatch(getAllAirlines(airlines));
};

const getAllAirlines = (airlines) => {
	return {
		type: actionTypes.GET_AIRLINES,
		payload: airlines
	};
};