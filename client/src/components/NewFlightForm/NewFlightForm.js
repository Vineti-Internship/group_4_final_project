import React from "react";
import "./NewFlightForm.css";

class NewFlightForm extends React.Component {
	constructor(props){
		super(props);
		this.state={
			to:"",
			flight_start:this.getMinimumDate(),
			flight_time:30,
			capacity:"100",
			selected_lane_id:-1,
			selected_airplane_id:-1,
			lanes_loaded:false,
			airplanes_loaded:false,
			fire_airplane_error:false,
			fire_lane_error:false,
			invalid_duration:false,
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
		this.handleCalcel = this.handleCalcel.bind(this);
	}

	async handleFindLane(e){
		e.preventDefault();
		const data = {flight_start:this.state.flight_start, capacity:parseInt(this.state.capacity)};
		await this.props.findLanes(data);
		this.setState({lanes:this.props.lanes, lanes_loaded:true, selected_lane_id:-1,  require_lane_find:false});
	}

	async handleFindAirplane(e){
		e.preventDefault();
		const flight_time = this.state.flight_time
		const data = {flight_start:this.state.flight_start, capacity:parseInt(this.state.capacity), flight_time};
		await this.props.findAirplanes(data);
		this.setState({airplanes:this.props.airplanes, airplanes_loaded:true, selected_airplane_id:-1, require_airplane_find:false});
	}

	handleChange(e){
		this.getMinimumDate();
		const {name, value} = e.target;
		if(name !== "to")
			this.setState({
				[name]:value,
				require_lane_find:true,
				require_airplane_find:true,
				invalid_duration:false
			});
		else
			this.setState({
				[name]:value
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

	handleCalcel(e){
		e.preventDefault();
		this.props.history.push("/");
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
		if(this.state.flight_time < 30){
			this.setState({invalid_duration:true});
		}
		if(this.state.require_airplane_find || this.state.require_lane_find)
			return false
		return true;
	}

	handleCreateFlight(e){
		e.preventDefault();
		if(!this.validateOptions())
			return;
		
		const flight_time = this.state.flight_time;
		const data = {
			from:"yerevan",
			to:this.state.to.toLowerCase(),
			flight_start:this.state.flight_start, 
			flight_time, 
			lane_id:this.state.selected_lane_id, 
			airplane_id:this.state.selected_airplane_id};
		this.props.createFlight(data);
		this.props.history.push("/flights");
		this.props.loadAllFlights();
	}

	findLanesForm = () => {
		if(this.state.lanes_loaded && !this.state.lanes.length)
			return <h2 className="no-lane-notif">No lanes were found for specified properties...</h2>
		else if(!this.state.lanes_loaded)
			return ""
		return (
			this.state.lanes.map((lane, index) =>{
				return (
					<div className={`card lane-found-#${index}`} key={lane.id} style={this.state.selected_lane_id === lane.id?{width:"10rem", display:"inline-block", backgroundColor:"MediumSeaGreen"}:{width:"10rem", display:"inline-block", backgroundColor:"white"}} onClick={(e)=>this.selectLane(e, lane.id)}>
						<div className="card-body">
							<h5 className="card-title lane-found-id">Lane no {lane.id}</h5>
							<h4 className="card-text lane-found-capacity">Capacity {lane.capacity}</h4>
						</div>
					</div>
				);
			})
		)
	}

	findAirplanesForm = () => {
		if(this.state.airplanes_loaded && !this.state.airplanes.length)
			return <h2 className="no-airplane-notif">No airplanes were found for specified properties...</h2>
		else if(!this.state.airplanes_loaded)
			return ""
		return (
			this.state.airplanes.map((airplane,index) =>{
				return (
					<div className={`card airplane-found-#${index}`} key={airplane.id} style={this.state.selected_airplane_id === airplane.id?{width:"10rem", display:"inline-block", backgroundColor:"DodgerBlue"}:{width:"10rem", display:"inline-block", backgroundColor:"white"}} onClick={(e)=>this.selectAirplane(e, airplane.id)}>
						<div className="card-body">
							<h5 className="card-title airplane-found-name">Name {airplane.name}</h5>
							<h4 className="card-text airplane-found-capacity"> Capacity {airplane.capacity}</h4>
							<p className="card-text airplane-found-model">Model {airplane.model}</p>
						</div>
					</div>
				);
			})
		)
	}

	getMinimumDate = () => {
		const now = new Date();
		return `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}T${now.getHours()+1 <10?`0${now.getHours()+1}`:now.getHours()+1}:${now.getMinutes() <10?`0${now.getMinutes()}`:now.getMinutes()}`;
	}

	render() {
		return (
			<div className="new-flight-form">
				<h1 className="create-new-flight-header">Create New Flight</h1>
				<center>
					<form style={{width:"30rem"}} onSubmit={this.handleCreateFlight}>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="inputGroup-sizing-default">Flight destination:</span>
							</div>
							<input type="text" required id="to-input" name="to" onChange={this.handleChange} value={this.state.to} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
						</div>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="inputGroup-sizing-default">Flight start:</span>
							</div>
							<input type="datetime-local" min={this.getMinimumDate()} required name="flight_start" onChange={this.handleChange} value={this.state.flight_start} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
						</div>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="inputGroup-sizing-default">Flight duration:</span>
							</div>
							<input type="number" min="30" required name="flight_time" placeholder="duration in minutes" onChange={this.handleChange} value={this.state.flight_time} className="form-control without_ampm" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
						</div> 
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="inputGroup-sizing-default">Passanger count:</span>
							</div>
							<input type="number" min="10" required name="capacity" onChange={this.handleChange} value={this.state.capacity} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
						</div> 
						<button className="find-airplane-btn btn btn-primary" onClick={this.handleFindAirplane}>Find available airplane</button>
						{this.state.require_airplane_find && <i className="fas fa-arrow-left require-airplane-notif"> Click here to refresh list</i>}
						<div className="found-airplanes">
							<br/>
							{this.findAirplanesForm()}
						</div>
						<br/>
						<button className="find-lane-btn btn btn-primary" onClick={this.handleFindLane}>Find available lane</button>
						{this.state.require_lane_find && <i className="fas fa-arrow-left require-lane-notif"> Click here to refresh list</i>}						
						<br/>
						<div className="found-lanes">
							<br/>
							{this.findLanesForm()}
						</div>
						<br/>
						{this.state.fire_airplane_error && <label className="no-airplane-chosen-lbl" style={{color:"red"}}>You have to choose airplane</label>}
						{this.state.fire_airplane_error && <br/>}
						{this.state.fire_lane_error && <label className="no-lane-chosen-lbl" style={{color:"red"}}>You have to choose lane</label>}
						{this.state.fire_lane_error && <br/>}
						{this.state.invalid_duration && <label className="invalid-duration-lbl" style={{color:"red"}}>You have to choose valid flight duration</label>}
						{this.state.invalid_duration && <br/>}
						<button className="cancel-btn btn btn-danger" onClick={this.handleCalcel}>Cancel</button>
						{"\t"}
						<input className="submit-btn btn btn-success" type="submit" value="Create flight"/>
					</form>
				</center>
			</div>
		);
	}
}

export default NewFlightForm;
