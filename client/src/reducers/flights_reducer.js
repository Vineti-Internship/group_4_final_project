import * as actionTypes from "../actions/types";

const initialState = [];

export default (flights = initialState, action) => {
	switch(action.type){
		case actionTypes.getFlights:
			return [...flights, action.payload];
	}
};