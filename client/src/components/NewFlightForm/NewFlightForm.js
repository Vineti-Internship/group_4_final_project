import React from "react";
import "./NewFlightForm.css";

class NewFlightForm extends React.Component {
	constructor(props){
		super(props);
		this.state={
			from:"Yerevan",
			to:"",
			flight_start:"2018-12-13T01:00",
			flight_time:"01:00",
			capacity:"100",
			selected_lane_id:-1,
			selected_airplane_id:-1
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleFindLane = this.handleFindLane.bind(this);
		this.handleFindAirplane = this.handleFindAirplane.bind(this);
	}

	async handleFindLane(e){
		e.preventDefault();
		const data = {flight_start:this.state.flight_start, capacity:this.state.capacity};
		await this.props.findLanes(data);
		this.setState({lanes:this.props.lanes});
	}

	async handleFindAirplane(e){
		e.preventDefault();
		const flight_time = parseInt(this.state.flight_time[0])*10*60+parseInt(this.state.flight_time[1])*60+parseInt(this.state.flight_time[3])*10+parseInt(this.state.flight_time[4]);
		const data = {flight_start:this.state.flight_start, capacity:this.state.capacity, flight_time};
		await this.props.findAirplanes(data);
	}

	handleChange(e){
		const {name, value} = e.target;
		this.setState({
			[name]:value
		});
	}

	selectLane(e,id){
		this.setState({
			selected_lane_id:id
		});
	}

	selectAirplane(e,id){
		this.setState({
			selected_airplane_id:id
		});
	}

	render() {
		return (
			<div className="new-flight-form">
				<h1>Create New Flight</h1>
				<center>
					<form style={{width:"30rem"}}>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="inputGroup-sizing-default">Flight destination:</span>
							</div>
							<input type="text" required name="to" onChange={this.handleChange} value={this.state.to} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
						</div>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="inputGroup-sizing-default">Flight start:</span>
							</div>
							<input type="datetime-local" required name="flight_start" onChange={this.handleChange} value={this.state.flight_start} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
						</div>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="inputGroup-sizing-default">Flight duration:</span>
							</div>
							<input type="time" required name="flight_time" onChange={this.handleChange} value={this.state.flight_time} className="form-control without_ampm" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
						</div> 
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="inputGroup-sizing-default">Passanger count:</span>
							</div>
							<input type="number" required name="capacity" onChange={this.handleChange} value={this.state.capacity} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
						</div> 
						<button className="find-airplane-btn btn btn-primary" onClick={this.handleFindAirplane}>Find available airplane</button>
						<div className="found-airplanes">
							<br/>
							{this.state.airplanes? this.state.airplanes.map((airplane) =>{
								if(this.state.selected_airplane_id === airplane.id)
									return (
										<div className="card" key={airplane.id} style={{width:"10rem", display:"inline-block", backgroundColor:"DodgerBlue"}} onClick={(e)=>this.selectAirplane(e, airplane.id)}>
											<div className="card-body">
												<h5 className="card-title">{airplane.name}</h5>
												<h4 className="card-text">{airplane.model}</h4>
											</div>
										</div>
									);
								else
									return (
										<div className="card" key={airplane.id} style={{width:"10rem", display:"inline-block", backgroundColor:"white"}} onClick={(e)=>this.selectAirplane(e, airplane.id)}>
											<div className="card-body">
												<h5 className="card-title">{airplane.name}</h5>
												<h4 className="card-text">{airplane.model}</h4>
											</div>
										</div>
									);
							}): ""
							}
						</div>
						<button className="find-lane-btn btn btn-primary" onClick={this.handleFindLane}>Find available lane</button>
						<br/>
						<div className="found-lanes">
							<br/>
							{this.state.lanes? this.state.lanes.map((lane) =>{
								if(this.state.selected_lane_id === lane.id)
									return (
										<div className="card" key={lane.id} style={{width:"10rem", display:"inline-block", backgroundColor:"DodgerBlue"}} onClick={(e)=>this.selectLane(e, lane.id)}>
											<div className="card-body">
												<h5 className="card-title">Lane no {lane.id}</h5>
											</div>
										</div>
									);
								else
									return (
										<div className="card" key={lane.id} style={{width:"10rem", display:"inline-block", backgroundColor:"white"}} onClick={(e)=>this.selectLane(e, lane.id)}>
											<div className="card-body">
												<h5 className="card-title">Lane no {lane.id}</h5>
											</div>
										</div>
									);
							}):""
							}
						</div>
						<br/>
						<button className="cancel-btn btn btn-danger">Cancel</button>
						{"\t"}
						<input className="btn btn-success" type="submit" value="Create flight"/>
					</form>
				</center>
			</div>
		);
	}
}

export default NewFlightForm;
