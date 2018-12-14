import axios from "axios";
import setAuthorizationToken from "../helpers/setAuthorizationToken";
import * as actionTypes from "./types";
import Auth from "../Auth";
import jwtDecode from "jwt-decode";


export function setCurrentUser(user) {
	return {
		type: actionTypes.SET_CURRENT_USER,
		payload: user
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
	return async dispatch => {
		try {
		// data = {
		// 	"email":"benedict@mail.com",
		// 	"password":"123456"
		// };
			const res = await axios.post("users/login", data);
			dispatch({ type: actionTypes.AUTHENTICATED });
			const token = res.data.auth_token;

			console.log(jwtDecode(res.data.auth_token));
			
			Auth.authenticateToken(token);
			setAuthorizationToken(token);
			dispatch(setCurrentUser((token)));
		} catch(err) {
			dispatch({
				type: actionTypes.AUTHENTICATION_ERROR,
				payload: "Invalid email or password"
			});
		}
	};
}