import { combineReducers } from "redux";
import FlightsReducer from "./flights_reducer";

export default combineReducers({
	flights: FlightsReducer
});