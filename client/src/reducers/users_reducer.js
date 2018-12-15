import * as actionTypes from "../actions/types";

const initialUsersState = {
	status:[],
	user:{}
};

/*eslint indent: [2, "tab", {"SwitchCase": 1}]*/
export default (state = initialUsersState, action) => {
	switch(action.type){
		case actionTypes.CREATE_USER:
			if(action.payload.constructor === Array)
				return {...state, status:[...action.payload]};
			return {...state, status:[]};
		case actionTypes.GET_USER:
			return {...state, user: action.payload};
		default:
			return state;
	}
};