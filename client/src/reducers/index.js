import { combineReducers } from "redux";
import FlightReducer from "./flights_reducer";

export default combineReducers({
	flights: FlightReducer
});