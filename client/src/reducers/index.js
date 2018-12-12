import { combineReducers } from "redux";
import FlightsReducer from "./flights_reducer";
import LanesReducer from "./flights_reducer";
import AirplanesReducer from "./flights_reducer";

export default combineReducers({
	flights: FlightsReducer,
	lanes: LanesReducer,
	airplanes: AirplanesReducer
});