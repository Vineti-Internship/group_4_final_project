import { SET_CURRENT_USER } from "../actions/types";
import {isEmpty} from "../helpers/validations/validateSignin";
const initialState = {
	isAuthenticated: false,
	user: {}
};

export default (state = initialState, action = {}) => {
	switch(action.type) {
	case SET_CURRENT_USER:
		return {
			isAuthenticated: !isEmpty(action.user),
			user: action.user
		};
	default: return state;
	}
};