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
import * as authActions from "./actions/auth_actions";
import SignInForm from "./components/SignInForm";
import { connect } from "react-redux";
import Profile from "./components/Profile";
import Lanes from "./components/Lanes";
import SearchResult from "./components/SearchResult";
import Airplanes from "./components/AirplanesList";
import NewLanesForm from "./components/NewLanesForm";


class App extends React.Component {
	constructor(props){
		super(props);
		this.state={auth:this.props.auth};
		this.handleSignout = this.handleSignout.bind(this);
	}

	handleSignout(e){
		e.preventDefault();
		this.props.logout();
		this.setState({auth:this.props.auth});
	}

	render() {
		const userLinks = (
			<React.Fragment>
				{this.props.auth && <Link to="/profile" style={{marginRight:"16px"}} className="link-profile">Profile</Link>}
				{this.props.auth && <Link to="/" onClick={this.handleSignout} style={{marginRight:"16px"}} className="link-signout">Sign out</Link>}
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
							<Link to="/flights" style={{marginRight:"16px"}} className="link-flights">Flights</Link>
							{this.props.auth ? userLinks : guestLinks}
						</div>
						<Switch>
              <Route exact path = "/lanes" render={()=>  <Lanes />} />
              <Route exact path = "/newlane" render={({history})=>  <NewLanesForm history= {history} />} />
              <Route exact path = "/airplanes" render={()=>  <Airplanes />} />
							<Route exact path = "/flights" render ={()=> <Flights/>} />
							<Route exact path = "/flights/:flightId" render ={({match, history})=> <Flight match={match} history={history}/>} />
							<Route exact path = "/signup" render ={({history})=> this.props.auth?<Redirect to="/"/>:<SignUpForm history={history}/>} />
							<Route exact path = "/signin" render={({history}) => this.props.auth?<Redirect to="/"/>:<SignInForm history={history}/>}/>
							<Route exact path = "/newflight" render={({history})=>  <NewFlightForm history={history}/>} />
							<Route exact path = "/search/:search_url" render={({match, history})=> <SearchResult match={match} history={history}/>} />
							<Route exact path = "/" render={()=>  <Redirect to="/flights" />} />
							<Route exact path = "/profile" render={() => this.props.auth?<Profile />:<Redirect to="/signin"/>} />}
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
export default connect(mapStateToProps, authActions)(App);