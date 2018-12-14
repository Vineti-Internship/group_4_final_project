import * as actionTypes from "../actions/types";

const initialFlightsState = {
	all_flights:[],
	current_flight:{},
	error_code:0
};

/*eslint indent: [2, "tab", {"SwitchCase": 1}]*/
export default (state = initialFlightsState, action) => {
	switch(action.type){
		case actionTypes.GET_FLIGHTS:
			return {...state, all_flights:[...action.payload]};
		case actionTypes.GET_CURRENT_FLIGHT:
			return {...state, current_flight:{...action.payload}};
		case actionTypes.FLIGHT_NOT_FOUND:
			return {...state, error_code:404};
		case actionTypes.SEARCH_FLIGHTS:
			return {...state, search_result:[...action.payload]};
		default:
			return state;
	}
};