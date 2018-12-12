import * as actionTypes from "../actions/types";

const initialUsersState = {
	status:""
};

/*eslint indent: [2, "tab", {"SwitchCase": 1}]*/
export default (state = initialUsersState, action) => {
	switch(action.type){
		case actionTypes.CREATE_USER:
			return {...state, status:action.payload};
		default:
			return state;
	}
};