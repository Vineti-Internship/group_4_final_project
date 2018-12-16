import * as actionTypes from "../actions/types";

const initialLaneMaxCountsState = {
	maxCount: []
};

/*eslint indent: [2, "tab", {"SwitchCase": 1}]*/
export default (state = initialLaneMaxCountsState, action) => {
	switch(action.type){
		case actionTypes.GET_MAX_COUNT:
			return {...state, maxCount: [...action.payload]};
		default:
			return state;
	}
};
