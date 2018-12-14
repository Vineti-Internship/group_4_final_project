import axios from "axios";
import setAuthorizationToken from "../helpers/setAuthorizationToken";
// import jwtDecode from "jwt-decode";
import { SET_CURRENT_USER } from "./types";

export function setCurrentUser(user) {
	return {
		type: SET_CURRENT_USER,
		user
	};
}

export function logout() {
	return dispatch => {
		localStorage.removeItem("jwtToken");
		setAuthorizationToken(false);
		dispatch(setCurrentUser({}));
	};
}

export function login(data) {
	return dispatch => {
		data = {
			"email":"benedict@mail.com",
			"password":"123456"
		};
		return axios.post("/users/login", data).then(res => {
			// console.log("res", res);
			
			const token = res.data.token;
			localStorage.setItem("jwtToken", token);
			setAuthorizationToken(token);
			// dispatch(setCurrentUser(jwtDecode(token)));
		});
	};
}