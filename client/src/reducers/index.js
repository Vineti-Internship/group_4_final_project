import { combineReducers } from "redux";
import FlightsReducer from "./flights_reducer";
import LanesReducer from "./lanes_reducer";
import AirplanesReducer from "./airplanes_reducer";
import UsersReducer from "./users_reducer";
import auth from "./auth_reducer";

export default combineReducers({
	flights: FlightsReducer,
	lanes: LanesReducer,
	airplanes: AirplanesReducer,
	users: UsersReducer,
	auth,
});