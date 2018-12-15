/* eslint-disable no-console */
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

export const getUserInfo = () => async dispatch => {
	const res = await axios.get("/profile");  
	const userInfo = await res.data;
	dispatch(getUser(userInfo));
};

export const getUser = (userInfo) => {
	return {
		type: actionTypes.GET_USER,
		payload: userInfo
	};
};