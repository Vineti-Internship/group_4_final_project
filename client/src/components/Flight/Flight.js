/* eslint-disable no-unused-vars */
import React from "react";
import Spinner from "../Spinner";
import FlightForm from "./FlightForm";

class Flight extends React.Component {
	constructor(props){
		super(props);
		this.buyTicketHandler = this.buyTicketHandler.bind(this);
		this.state={
			status:""
		};
	}

	async componentDidMount(){
		const id = this.props.match.params.flightId;
		await this.props.getFlight(id);
		if(this.props.errorCode === 404)
			this.props.history.push("/404");
		this.setState({flight:this.props.flight});
	}

	async buyTicketHandler () {
		if(window.confirm("Are you sure you want to buy this ticket?")) {
			await this.props.buyTicket(this.state.flight.id);
			const id = this.props.match.params.flightId;
			await this.props.getFlight(id);
			this.setState({flight:this.props.flight, status: this.props.status});	
			if(this.props.status !== "error"){
				this.props.history.push("/profile");
			}
		}	
	}
	
	render() {
		if(this.state && this.state.flight)
			return (
				<center>
					<h1>Flight #{this.state.flight.id}</h1>
					<br/>
					<div style={{width:"45rem"}} className={`flight-#${this.state.flight.id}`}>
						<FlightForm flight={this.state.flight}/>
						{this.state.status === "error" && <label>You already bought that ticket</label>}
						<div>
							{!this.state.flight.is_ended && <button onClick={this.buyTicketHandler} className="btn btn-success">Buy Ticket</button>}
						</div>
						<br/>
					</div>
				</center>
			);
		return <Spinner/>;
	}
}

export default Flight;