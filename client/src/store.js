import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import jwtDecode from "jwt-decode";
import setAuthorizationToken from "./helpers/setAuthorizationToken";
import { setCurrentUser } from "./actions/auth_actions";
// import { render } from "react-dom";
// import { Router, browserHistory } from 'react-router';


const store = createStore(
	rootReducer,
	applyMiddleware(thunk),
);

if (localStorage.jwtToken) {
	setAuthorizationToken(localStorage.jwtToken);
	store.dispatch(setCurrentUser((localStorage.jwtToken)));
}

export default store;