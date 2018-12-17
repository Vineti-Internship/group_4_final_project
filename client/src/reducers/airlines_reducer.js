import * as actionTypes from "../actions/types";

const initialAirlinesState = {
	allAirlines: []
};

/*eslint indent: [2, "tab", {"SwitchCase": 1}]*/
export default (state = initialAirlinesState, action) => {
	switch(action.type){
		case actionTypes.GET_AIRLINES:
			return {...state, allAirlines: [...action.payload]};
		default:
			return state;
	}
};