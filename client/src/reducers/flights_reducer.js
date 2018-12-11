import * as actionTypes from "../actions/types";

const initialFlightsState = [];

/*eslint indent: [2, "tab", {"SwitchCase": 1}]*/
export default (flights = initialFlightsState, action) => {
	switch(action.type){
		case actionTypes.getFlights:
			return [...flights, action.payload];

	}
};