import * as actionTypes from "../actions/types";

const initialLanesState = {
	foundLanes: [],
	allLanes: [],
	currentLane: {}
};

/*eslint indent: [2, "tab", {"SwitchCase": 1}]*/
export default (state = initialLanesState, action) => {
	switch(action.type){
		case actionTypes.FIND_LANES:
			return {...state, foundLanes: [...action.payload]};
		case actionTypes.GET_LANES:
			return {...state, allLanes: [...action.payload]};
		case actionTypes.GET_CURRENT_LANE:
			return {...state, currentLane: {...action.payload}};
		case actionTypes.CREATE_LANE:
			return {...state};
		default:
			return state;
	}
};