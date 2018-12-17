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
import NewAirplaneForm from "./components/NewAirplaneForm";

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
				{this.props.auth && <li className="nav-item">
					<Link to="/profile" style={{marginRight:"16px"}} className="link-profile  nav-link">Profile</Link>
				</li>}
				{this.props.auth && <li className="nav-item">
					<Link to="/" onClick={this.handleSignout} style={{marginRight:"16px", float:"right"}} className="link-signout  nav-link">Sign out</Link>
				</li>}
			</React.Fragment>
		);
		
		const guestLinks = (
			<React.Fragment>
				{!this.props.auth && <li className="nav-item">
					<Link to="/signin" style={{marginRight:"16px"}} className="link-signin nav-link">Sign In</Link>
				</li>}
				{!this.props.auth &&<li className="nav-item">
					<Link to="/signup" style={{marginRight:"16px"}} className="link-signup nav-link">Sign Up</Link>
				</li>}
			</React.Fragment>
    );

    const managerLinks = (
      <React.Fragment>
        {
          this.props.aud === "l_manager" &&
          <li className="nav-item">
            <Link to="/lanes" style={{marginRight:"16px"}} className="link-signin nav-link">Lanes</Link>
          </li>
        }
        {
          this.props.aud === "l_manager" &&
          <li className="nav-item">
            <Link to="/airplanes" style={{marginRight:"16px"}} className="link-signin nav-link">Airplanes</Link>
          </li>
        }
        {
          this.props.aud !== "l_manager" &&
          <li className="nav-item">
            <Link to="/flights" style={{marginRight:"16px"}} className="link-signup nav-link">Flights</Link>
          </li>
        }
      </React.Fragment>
    );


		return (
			<div className="App" style={{margin:"20px"}}>
				<Router>
					<React.Fragment>
						<SearchForm/>
						<div className="nav">
							<ul className="nav nav-tabs">
                {managerLinks}
								{this.props.auth ? userLinks : guestLinks}
							</ul>
						</div>
						<Switch>
							<Route exact path = "/lanes" render={({history})=> this.props.aud === "l_manager" ? <Lanes {...{history}}/> : <Redirect to="/profile"/>} />
							<Route exact path = "/newlane" render={({history})=> <NewLanesForm {...{history}} />} />
							<Route exact path = "/lanes/:laneId" render={({match, history})=> <NewLanesForm {...{match, history}} />} />
							<Route exact path = "/airplanes" render={(history)=>  <Airplanes {...{history}} />} />
              <Route exact path = "/newairplane" render={({history})=> <NewAirplaneForm {...{history}} />} />
							<Route exact path = "/flights" render ={({history})=> <Flights history={history}/>} />
							<Route exact path = "/flights/:flightId" render ={({match, history})=> <Flight match={match} history={history}/>} />
							<Route exact path = "/signup" render ={({history})=> this.props.auth?<Redirect to="/"/>:<SignUpForm history={history}/>} />
							<Route exact path = "/signin" render={({history}) => this.props.auth?<Redirect to="/"/>:<SignInForm history={history}/>}/>
							<Route exact path = "/newflight" render={({history})=>  this.props.aud === "f_manager"?<NewFlightForm history={history}/>:<Redirect to="/"/>} />
							<Route exact path = "/search/:search_url" render={({match, history})=> <SearchResult match={match} history={history}/>} />
							<Route exact path = "/" render={()=>  <Redirect to="/flights" />} />
							<Route exact path = "/profile" render={({history}) => this.props.auth?<Profile history={history}/>:<Redirect to="/signin"/>} />}
							<Route path="*" render={() => <NotFound/>} />
						</Switch>
					</React.Fragment>
				</Router>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	aud: state.auth.aud,
	auth: state.auth.authenticated
});

export default connect(mapStateToProps, authActions)(App);