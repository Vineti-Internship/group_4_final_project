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
	// compose(
	applyMiddleware(thunk),
	// 	window.devToolsExtension ? window.devToolsExtension() : f => f
	// )
);

if (localStorage.jwtToken) {
	setAuthorizationToken(localStorage.jwtToken);
	store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

// render(
//   <Provider store={store}>
//     <Router history={browserHistory} routes={routes} />
//   </Provider>, document.getElementById('app'));

export default store;