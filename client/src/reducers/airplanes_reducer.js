import * as actionTypes from "../actions/types";

const initialAirplanesState = {
	foundAirplanes:[],
	allAirplanes: []
};

/*eslint indent: [2, "tab", {"SwitchCase": 1}]*/
export default (state = initialAirplanesState, action) => {
	switch(action.type){
		case actionTypes.FIND_AIRPLANES:
			return {...state, foundAirplanes: [...action.payload]};
		case actionTypes.GET_AIRPLANES:
			return {...state, allAirplanes: [...action.payload]};
		case actionTypes.CREATE_AIRPLANE:
			return {...state};
		default:
			return state;
	}
};