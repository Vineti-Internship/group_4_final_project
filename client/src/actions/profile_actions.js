import * as actionTypes from "./types";
import axios from "axios";


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