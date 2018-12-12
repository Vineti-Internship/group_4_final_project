import * as actionTypes from "../actions/types";

const initialFlightsState = {
	all_flights:[]
};

/*eslint indent: [2, "tab", {"SwitchCase": 1}]*/
export default (state = initialFlightsState, action) => {
	switch(action.type){
		case actionTypes.GET_FLIGHTS:
			return {...state, all_flights:[...action.payload]};
		default:
			return state;
	}
};