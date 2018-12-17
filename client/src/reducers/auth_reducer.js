import * as actionTypes from "../actions/types";
import Auth from "../Auth";
const initialState = {
	authenticated: false,
	aud: "",
	error: ""
};

/*eslint indent: [2, "tab", {"SwitchCase": 1}]*/
export default (state = initialState, action = {}) => {
	switch(action.type) {
		case actionTypes.SET_CURRENT_USER:
			return {
				...state,
				aud: action.payload.aud,
				authenticated: Auth.isUserAuthenticated()
			};
		case actionTypes.AUTHENTICATED:
			return { 
				...state, 
				authenticated: Auth.isUserAuthenticated()
			};
		case actionTypes.UNAUTHENTICATED:
			return {
				...state,
				authenticated: Auth.isUserAuthenticated()
			};
		case actionTypes.AUTHENTICATION_ERROR:
			return {
				...state,
				error: action.payload 
			};
		default: return state;
	} 
};