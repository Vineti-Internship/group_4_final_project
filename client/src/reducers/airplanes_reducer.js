import * as actionTypes from "../actions/types";

const initialAirplanesState = {
	found_airplanes:[],
	allAirplanes: []
};

/*eslint indent: [2, "tab", {"SwitchCase": 1}]*/
export default (state = initialAirplanesState, action) => {
	switch(action.type){
		case actionTypes.FIND_AIRPLANES:
			return {...state, found_airplanes: [...action.payload]};
		case actionTypes.GET_AIRPLANES:
			return {...state, allAirplanes: [...action.payload]};
		default:
			return state;
	}
};