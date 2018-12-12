import * as actionTypes from "./types";
import axios from "axios";

export const createUser = (data) => async dispatch => {
	await axios.post("/users", {user:{...data}});
	dispatch({
		type: actionTypes.CREATE_USER,
		payload:"User created successfully"
	});
};