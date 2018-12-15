import * as actionTypes from "../actions/types";

const initialLanesState = {
	foundLanes: [],
	allLanes: []
};

/*eslint indent: [2, "tab", {"SwitchCase": 1}]*/
export default (state = initialLanesState, action) => {
	switch(action.type){
		case actionTypes.FIND_LANES:
			return {...state, foundLanes: [...action.payload]};
		case actionTypes.GET_LANES:
			return {...state, allLanes: [...action.payload]};
		default:
			return state;
	}
};