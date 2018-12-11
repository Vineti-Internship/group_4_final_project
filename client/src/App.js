import React from "react";
import "./App.css";
import Flights from "./components/Flights";
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div className='nav'>
					
				</div>
				<Router>
					<Switch>
						<Route exact path = '/flights' render ={()=> <Flights/>} />
						<Route exact path = '/' render={()=>  <Redirect to='/flights' />} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
