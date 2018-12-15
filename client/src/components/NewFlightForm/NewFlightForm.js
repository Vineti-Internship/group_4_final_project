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
			selected_airplane_id:-1,
			lanes_loaded:false,
			airplanes_loaded:false,
			fire_airplane_error:false,
			fire_lane_error:false,
			require_airplane_find:false,
			require_lane_find:false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleFindLane = this.handleFindLane.bind(this);
		this.handleFindAirplane = this.handleFindAirplane.bind(this);
		this.findAirplanesForm = this.findAirplanesForm.bind(this);
		this.findLanesForm = this.findLanesForm.bind(this);
		this.handleCreateFlight = this.handleCreateFlight.bind(this);
		this.validateOptions = this.validateOptions.bind(this);
	}

	async handleFindLane(e){
		e.preventDefault();
		const data = {flight_start:this.state.flight_start, capacity:parseInt(this.state.capacity)};
		await this.props.findLanes(data);
		this.setState({lanes:this.props.lanes, lanes_loaded:true, selected_lane_id:-1,  require_lane_find:false});
	}

	async handleFindAirplane(e){
		e.preventDefault();
		const flight_time = this.convertTimeToMinutes(this.state.flight_time)
		const data = {flight_start:this.state.flight_start, capacity:parseInt(this.state.capacity), flight_time};
		await this.props.findAirplanes(data);
		this.setState({airplanes:this.props.airplanes, airplanes_loaded:true, selected_airplane_id:-1, require_airplane_find:false});
	}

	convertTimeToMinutes = time => parseInt(time[0])*10*60+parseInt(time[1])*60+parseInt(time[3])*10+parseInt(time[4]);

	handleChange(e){
		const {name, value} = e.target;
		this.setState({
			[name]:value,
			require_lane_find:true,
			require_airplane_find:true,
		});
	}

	selectLane(e,id){
		this.setState({
			selected_lane_id:id,
			fire_lane_error:false,
		});
	}

	selectAirplane(e,id){
		this.setState({
			selected_airplane_id:id,
			fire_airplane_error:false,
		});
	}

	validateOptions(){
		if(this.state.selected_airplane_id === -1){
			this.setState({fire_airplane_error:true});
			return false;
		}
		if (this.state.selected_lane_id === -1){
			this.setState({fire_lane_error:true});
			return false;
		}
		if(this.state.require_airplane_find || this.state.require_lane_find)
			return false
		return true;
	}

	handleCreateFlight(e){
		e.preventDefault();
		if(!this.validateOptions())
			return;
		
		const flight_time = this.convertTimeToMinutes(this.state.flight_time)
		const data = {
			from:"yerevan",
			to:this.state.to,
			flight_start:this.state.flight_start, 
			flight_time, 
			lane_id:this.state.selected_lane_id, 
			airplane_id:this.state.selected_airplane_id};
		this.props.createFlight(data);
		this.props.history.push("/flights");
	}

	findLanesForm = () => {
		if(this.state.lanes_loaded && !this.state.lanes.length)
			return <h2>No lanes were found for specified properties...</h2>
		else if(!this.state.lanes_loaded)
			return ""
		return (
			this.state.lanes.map((lane) =>{
				return (
					<div className="card" key={lane.id} style={this.state.selected_lane_id === lane.id?{width:"10rem", display:"inline-block", backgroundColor:"MediumSeaGreen"}:{width:"10rem", display:"inline-block", backgroundColor:"white"}} onClick={(e)=>this.selectLane(e, lane.id)}>
						<div className="card-body">
							<h5 className="card-title">Lane no {lane.id}</h5>
							<h4 className="card-text">Capacity {lane.capacity}</h4>
						</div>
					</div>
				);
			})
		)
	}

	findAirplanesForm = () => {
		if(this.state.airplanes_loaded && !this.state.airplanes.length)
			return <h2>No airplanes were found for specified properties...</h2>
		else if(!this.state.airplanes_loaded)
			return ""
		return (
			this.state.airplanes.map((airplane) =>{
				return (
					<div className="card" key={airplane.id} style={this.state.selected_airplane_id === airplane.id?{width:"10rem", display:"inline-block", backgroundColor:"DodgerBlue"}:{width:"10rem", display:"inline-block", backgroundColor:"white"}} onClick={(e)=>this.selectAirplane(e, airplane.id)}>
						<div className="card-body">
							<h5 className="card-title">Name {airplane.name}</h5>
							<h4 className="card-text"> Capacity {airplane.capacity}</h4>
							<p className="card-text">Model {airplane.model}</p>
						</div>
					</div>
				);
			})
		)
	}

	render() {
		return (
			<div className="new-flight-form">
				<h1>Create New Flight</h1>
				<center>
					<form style={{width:"30rem"}} onSubmit={this.handleCreateFlight}>
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
						{this.state.require_airplane_find && <i className="fas fa-arrow-left"> Click here to refresh list</i>}
						<div className="found-airplanes">
							<br/>
							{this.findAirplanesForm()}
						</div>
						<br/>
						<button className="find-lane-btn btn btn-primary" onClick={this.handleFindLane}>Find available lane</button>
						{this.state.require_lane_find && <i className="fas fa-arrow-left"> Click here to refresh list</i>}						
						<br/>
						<div className="found-lanes">
							<br/>
							{this.findLanesForm()}
						</div>
						<br/>
						{this.state.fire_airplane_error && <label style={{color:"red"}}>You have to choose airplane</label>}
						{this.state.fire_airplane_error && <br/>}
						{this.state.fire_lane_error && <label style={{color:"red"}}>You have to choose lane</label>}
						{this.state.fire_lane_error && <br/>}
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
