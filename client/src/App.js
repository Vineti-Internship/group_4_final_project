import React from "react";
import "./App.css";
import Flights from "./components/Flights";
import NewFlightForm from "./components/NewFlightForm";
import NotFound from "./components/NotFound";
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Router>
					<React.Fragment>
						<div className='nav'>
							<Link to="/flights">Flights</Link>
							<Link to="#" >Profile</Link>
						</div>
						<Switch>
							<Route exact path = '/flights' render ={()=> <Flights/>} />
							<Route exact path = '/newflight' render={()=>  <NewFlightForm/>} />
							<Route exact path = '/' render={()=>  <Redirect to='/flights' />} />
							<Route path="*" render={() => <NotFound/>} />
						</Switch>
					</React.Fragment>
				</Router>
			</div>
		);
	}
}

export default App;
