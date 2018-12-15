import React from "react";
import Spinner from "../Spinner";

class Flight extends React.Component {

	async componentDidMount(){
		const id = this.props.match.params.flightId;
		await this.props.getFlight(id);
		if(this.props.errorCode === 404)
			this.props.history.push("/404");
		this.setState({flight:this.props.flight});
	}

	capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

	normalizeTime = str => 
		`${new Date(str).toISOString().split('T')[0]}\t${new Date(str).toISOString().split('T')[1].slice(0,8)}`
	

	render() {
		if(this.state && this.state.flight)
			return (
				<center>
					<h1>Flight #{this.state.flight.id}</h1>
					<br/>
					<div style={{width:"45rem"}} className={`flight-#${this.state.flight.id}`}>
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text" id="">From and to countries</span>
							</div>
							<input type="text" className="form-control from-input" value={this.capitalize(this.state.flight.from)} readOnly/>
							<input type="text" className="form-control to-input" value={this.capitalize(this.state.flight.to)} readOnly/>
						</div>
						<br/>
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text" id="">Scheduled departure and arrival</span>
							</div>
							<input type="text" className="form-control from-input" value={this.normalizeTime(this.state.flight.flight_start)} readOnly/>
							<input type="text" className="form-control to-input" value={this.normalizeTime(this.state.flight.flight_end)} readOnly/>
						</div>
						<br/>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="inputGroup-sizing-default">Available tickets</span>
							</div>
							<input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={this.state.flight.airplane.capacity - this.state.flight.tickets.length} readOnly/>
						</div>
						<br/>
						<div className="card" style={{float:"left",width:"15rem", display:"inline-block", backgroundColor:"DodgerBlue"}}>
						<h3>Airplane</h3>
							<div className="card-body">
								<h5 className="card-title">Name:{this.state.flight.airplane.name}</h5>
								<h4 className="card-text">Model:{this.state.flight.airplane.model}</h4>
								<p className="card-text">Capacity:{this.state.flight.airplane.capacity}</p>
							</div>
						</div>
						<div className="card" style={{float:"right",width:"15rem", display:"inline-block", backgroundColor:"MediumSeaGreen"}}>
						<h3>Lane</h3>
							<div className="card-body">
								<h5 className="card-title">No:{this.state.flight.lane.id}</h5>
							</div>
						</div>
					</div>
				</center>
			);
		return <Spinner/>;
	}
}

export default Flight;
