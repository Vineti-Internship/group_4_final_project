import * as actionTypes from "./types";
import axios from "axios";

export const createUser = (data) => async dispatch => {
	try {
		const res = await axios.post("/users", {user:{...data}});
		dispatch({
			type: actionTypes.CREATE_USER,
			payload:res.data.message
		});
	} catch (err) {
		console.log(err);
	}
};