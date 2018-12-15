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
import Auth from "./Auth";
import Profile from "./components/Profile";


class App extends React.Component {
	render() {
		// console.log("auth", this.props); 

		const userLinks = (
			<React.Fragment>
				<Link to="/signout" style={{marginRight:"16px"}} className="link-signout">Sign Out</Link>
				<Link to="/profile" style={{marginRight:"16px"}} className="link-profile">Profile</Link>
			</React.Fragment>
		);
		
		const guestLinks = (
			<React.Fragment>
				<Link to="/signup" style={{marginRight:"16px"}} className="link-signup">Sign Up</Link>
			 	<Link to="/signin" style={{marginRight:"16px"}} className="link-signin">Sign In</Link>
			</React.Fragment>
		);

		return (
			<div className="App">
				<SearchForm/>
				<Router>
					<React.Fragment>
						<div className="nav">
							{this.props.auth ? userLinks : guestLinks}
							<Link to="/flights" style={{marginRight:"16px"}} className="link-flights">Flights</Link>
							{/* {!this.props.auth && <Link to="/signup" style={{marginRight:"16px"}} className="link-signup">Sign Up</Link>} */}
							{/* {!this.props.auth && <Link to="/signin" style={{marginRight:"16px"}} className="link-signin">Sign In</Link>} */}

						</div>
						<Switch>
							<Route exact path = "/flights" render ={()=> <Flights/>} />
							<Route exact path = "/signup" render ={({history})=> <SignUpForm history={history}/>} />
							{/* <Route exact path = "/signout" render={({history}) => <Profile history={history}/>} /> */}
							<Route exact path = "/newflight" render={()=>  <NewFlightForm/>} />
							<Route exact path = "/" render={()=>  <Redirect to="/flights" />} />
							<Route exact path = "/profile" render={() => <Profile />} />
							{this.props.auth ? <Redirect to="/profile"/>: <Route exact path="/signin" render={() => <SignInForm/>} />}
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
export default connect(mapStateToProps)(App);