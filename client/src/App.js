import React from "react";
import "./App.css";
import {BrowserRouter as Router, Link, Redirect, Route} from "react-router-dom";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div className='nav'>
					
				</div>
				<Router>
					<switch>
						<Route exact path = '/flights' render ={()=> <Flights/>} />
						<Route exact path = '/' render={()=>  <Redirect to='/flights' />} />
					</switch>
				</Router>
			</div>
		);
	}
}

export default App;
