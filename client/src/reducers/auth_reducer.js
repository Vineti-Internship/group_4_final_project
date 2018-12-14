import * as actionTypes from "../actions/types";
// import {isEmpty} from "../helpers/validations/validateSignin";
const initialState = {
	user: {}
};

export default (state = initialState, action = {}) => {
	switch(action.type) {
	case actionTypes.SET_CURRENT_USER:
		return {
			...state,
			user: action.payload
		};
	case actionTypes.AUTHENTICATED:
		return { 
			...state, 
			authenticated: true 
		};
	case actionTypes.UNAUTHENTICATED:
		return {
			...state,
			authenticated: false 
		};
	case actionTypes.AUTHENTICATION_ERROR:
		return {
			...state,
			error: action.payload 
		};
	  default: return state;
	} 
};