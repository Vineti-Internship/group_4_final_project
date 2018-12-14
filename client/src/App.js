/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import Flights from "./components/Flights";
import NewFlightForm from "./components/NewFlightForm";
import NotFound from "./components/NotFound";
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import { connect } from "react-redux";
import { logout } from "./actions/auth_actions";
import Auth from "./Auth";

class App extends React.Component {
	render() {
		// console.log("auth", this.props); 
		
		return (
			<div className="App">
				<SearchForm/>
				<Router>
					<React.Fragment>
						<div className="nav">
							<Link to="/flights" style={{marginRight:"16px"}} className="link-flights">Flights</Link>
							<Link to="/signup" style={{marginRight:"16px"}} className="link-signup">Sign Up</Link>
							{!this.props.auth && <Link to="/signin" style={{marginRight:"16px"}} className="link-signin">Sign In</Link>}
							<Link to="#" style={{marginRight:"16px"}} className="link-profile">Profile</Link>

						</div>
						<Switch>
							<Route exact path = "/flights" render ={()=> <Flights/>} />
							<Route exact path = "/signup" render ={({history})=> <SignUpForm history={history}/>} />
							<Route exact path = "/newflight" render={()=>  <NewFlightForm/>} />
							<Route exact path = "/" render={()=>  <Redirect to="/flights" />} />
							{this.props.auth? <Redirect to="/profile"/>: <Route exact path="/signin" render={() => <SignInForm/>} />}
							<Route path="*" render={() => <NotFound/>} />
						</Switch>
					</React.Fragment>
				</Router>
			</div>
		);
	}
}

function mapStateToProps(state) {
	// console.log(state);
	return {
		aud: state.auth.aud,
		auth: state.auth.authenticated
	};
}
export default connect(mapStateToProps, { logout })(App);