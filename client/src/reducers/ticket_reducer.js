import * as actionTypes from "../actions/types";

const initialUserState = {
	error:""
};

/*eslint indent: [2, "tab", {"SwitchCase": 1}]*/
export default (state = initialUserState, action) => {
	switch(action.type){
		case actionTypes.BUY_TICKET:
			return {...state, error:action.payload};
		default:
			return state;
	}
};