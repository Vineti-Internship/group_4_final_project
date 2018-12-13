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
				<form>
					<label>Flight destination:</label>
					<input type="text" required name="to" onChange={this.handleChange} value={this.state.to}/>
					<br/>
					<label>Flight start:</label>
					<input type="datetime-local" required name="flight_start" onChange={this.handleChange} value={this.state.flight_start}/>
					<br/>
					<label>Flight duration:</label>
					<input type="time" className="without_ampm" required name="flight_time" onChange={this.handleChange} value={this.state.flight_time}/>
					<br/>
					<label>Passanger count:</label>
					<input type="number" required name="capacity" onChange={this.handleChange} value={this.state.capacity}/>
					<br/>
					<button className="find-airplane-btn" onClick={this.handleFindAirplane}>Find available airplane</button>
					<div className="found-airplanes">
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
						}): <h2>...</h2>
						}
					</div>
					<button className="find-lane-btn" onClick={this.handleFindLane}>Find available lane</button>
					<br/>
					<div className="found-lanes">
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
						}): <h2>...</h2>
						}
					</div>
					<br/>
					<button className="cancel-btn">Cancel</button>
					<input type="submit" value="Create flight"/>
				</form>
			</div>
		);
	}
}

export default NewFlightForm;
