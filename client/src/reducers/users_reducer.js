import * as actionTypes from "../actions/types";

const initialUsersState = {
	status:[],
	allUsers: [],
	currentUser: {},
	user:{}
};

/*eslint indent: [2, "tab", {"SwitchCase": 1}]*/
export default (state = initialUsersState, action) => {
	switch(action.type){
		case actionTypes.GET_USER:
			return {...state, user: action.payload};
		case actionTypes.CREATE_USER:
			if(action.payload.constructor === Array)
				return {...state, status:[...action.payload]};
			return {...state, status:[]};
		case actionTypes.GET_ALL_USERS:
			return {...state, allUsers: action.payload};
		// case actionTypes.GET_TICKET:
		// 	return {...state, ...user.flights:[...action.payload]}
		case actionTypes.GET_CURRENT_USER:
			return {...state, currentUser: {...action.payload}};
		default:
			return state;
	}
};