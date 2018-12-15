/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import Flights from "./components/Flights";
import Flight from "./components/Flight";
import NewFlightForm from "./components/NewFlightForm";
import NotFound from "./components/NotFound";
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";
import SignUpForm from "./components/SignUpForm";

import SignInForm from "./components/SignInForm";
import { connect } from "react-redux";
import Auth from "./Auth";
import Profile from "./components/Profile";

import NewLaneForm from "./components/NewLanesForm/new_lane_form";
import Lanes from "./components/Lanes";
import SearchResult from "./components/SearchResult";


class App extends React.Component {
	render() {
		// console.log("auth", this.props); 

		const userLinks = (
			<React.Fragment>
				{/* <Link to="/signout" style={{marginRight:"16px"}} className="link-signout">Sign Out</Link> */}
				{this.props.auth && <Link to="/profile" style={{marginRight:"16px"}} className="link-profile">Profile</Link>}
			</React.Fragment>
		);
		
		const guestLinks = (
			<React.Fragment>
				{!this.props.auth && <Link to="/signup" style={{marginRight:"16px"}} className="link-signup">Sign Up</Link>}
				{!this.props.auth && <Link to="/signin" style={{marginRight:"16px"}} className="link-signin">Sign In</Link>}
			</React.Fragment>
		);

		return (

			<div className="App" style={{margin:"20px"}}>
				<Router>
					<React.Fragment>
						<SearchForm/>
						<div className="nav">
							{this.props.auth ? userLinks : guestLinks}
							<Link to="/flights" style={{marginRight:"16px"}} className="link-flights">Flights</Link>
						</div>
						<Switch>
              <Route exact path = "/lanes" render={()=>  <Lanes />} />
              <Route exact path = "/newlane" render={()=>  <NewLaneForm />} />
							<Route exact path = "/flights" render ={()=> <Flights/>} />
							<Route exact path = "/flights/:flightId" render ={({match, history})=> <Flight match={match} history={history}/>} />
							<Route exact path = "/signup" render ={({history})=> <SignUpForm history={history}/>} />
							<Route exact path = "/newflight" render={({history})=>  <NewFlightForm history={history}/>} />
							<Route exact path = "/search/:search_url" render={({match, history})=> <SearchResult match={match} history={history}/>} />
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