import * as actionTypes from "./types";
import axios from "axios";

export const buyTicket = (id) => async dispatch => {
	try {
		const res = await axios.post("/tickets", {flight_id: id});
		dispatch({
			type: actionTypes.BUY_TICKET,
			payload: res.data.status
		});
	} catch(err) {
		console.log(err);
	}
};
