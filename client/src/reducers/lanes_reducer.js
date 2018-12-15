import * as actionTypes from "../actions/types";

const initialLanesState = {
	found_lanes:[],
	all_lanes:[]
};

/*eslint indent: [2, "tab", {"SwitchCase": 1}]*/
export default (state = initialLanesState, action) => {
	switch(action.type){
		case actionTypes.FIND_LANES:
			return {...state, found_lanes: [...action.payload]};
		case actionTypes.GET_LANES:
			return {...state, all_lanes: [...action.payload]};
		default:
			return state;
	}
};