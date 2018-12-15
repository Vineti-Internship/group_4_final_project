import axios from "axios";
import setAuthorizationToken from "../helpers/setAuthorizationToken";
import * as actionTypes from "./types";
import Auth from "../Auth";
import jwtDecode from "jwt-decode";


export const setCurrentUser = user => ({
	type: actionTypes.SET_CURRENT_USER,
	payload: user
});

export const logout = () => dispatch => {
	Auth.deauthenticateToken();
	setAuthorizationToken(false);
	dispatch(setCurrentUser({}));
};

export const login = data => async dispatch => {
	try {
		const res = await axios.post("users/login", data);
		dispatch({ type: actionTypes.AUTHENTICATED });
		const token = res.data.auth_token;
		Auth.authenticateToken(token);
		setAuthorizationToken(token);
		dispatch(setCurrentUser(jwtDecode(token)));
	} catch(err) {
		dispatch({
			type: actionTypes.AUTHENTICATION_ERROR,
			payload: "Invalid email or password"
		});
	}
};