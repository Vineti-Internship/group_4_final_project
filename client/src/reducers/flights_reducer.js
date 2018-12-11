import * as actionTypes from "../actions/types";

const initialFlightsState = [];

/*eslint indent: [2, "tab", {"SwitchCase": 1}]*/
export default (flights = initialFlightsState, action) => {
	switch(action.type){
		case actionTypes.GET_FLIGHTS:
			return [...action.payload];
		default:
			return flights;
	}
};