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
	const usersInfo = await res.data;
	dispatch(getUser(usersInfo));
};

export const getUser = (usersInfo) => {
	return {
		type: actionTypes.GET_USER,
		payload: usersInfo
	};
};

export const allUsers = () => async dispatch => {
	const res = await axios.get("/users");
	const users = res.data;
	dispatch(getAllUsers(users));
};

export const getAllUsers = (users) => {
	return {
		type: actionTypes.GET_ALL_USERS,
		payload: users
	};
};

export const getCurrentUser = id => async dispatch => {
	try {
    const res = await axios.get(`/users/${id}`);
		const user = res.data;
		dispatch(getUserById(user));
	} catch (error) {
		console.log(error);
	}
};

export const getUserById = (user) => {
	return {
		type: actionTypes.GET_CURRENT_USER,
		payload: user
	};
};

export const updateUser = (id, data) => async dispatch => {
  try {
		await axios.put(`/users_role/${id}`, { ... data } );
		dispatch({
			type: actionTypes.UPDATE_USER
		});
	} catch (error) {
		console.log(error);
	}
};

