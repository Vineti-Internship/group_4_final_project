import React from "react";

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const normalizeTime = str => 
	`${new Date(str).toISOString().split("T")[0]}\t${new Date(str).toISOString().split("T")[1].slice(0,8)}`;

export default (props) => {
	return (
		<React.Fragment>
			<div className="input-group">
				<div className="input-group-prepend">
					<span className="input-group-text" id="">From and to countries</span>
				</div>
				<input type="text" className="form-control from-input" value={capitalize(props.flight.from)} readOnly/>
				<input type="text" className="form-control to-input" value={capitalize(props.flight.to)} readOnly/>
			</div>
			<br/>
			<div className="input-group">
				<div className="input-group-prepend">
					<span className="input-group-text" id="">Scheduled departure and arrival</span>
				</div>
				<input type="text" className="form-control from-input" value={normalizeTime(props.flight.flight_start)} readOnly/>
				<input type="text" className="form-control to-input" value={normalizeTime(props.flight.flight_end)} readOnly/>
			</div>
			<br/>
			<div className="input-group mb-3">
				<div className="input-group-prepend">
					<span className="input-group-text" id="inputGroup-sizing-default">Available tickets</span>
				</div>
				<input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={props.flight.airplane.capacity - props.flight.tickets.length} readOnly/>
			</div>
			<br/>
			<div className="card" style={{float:"left",width:"15rem", display:"inline-block", backgroundColor:"DodgerBlue"}}>
				<h3>Airplane</h3>
				<div className="card-body">
					<h5 className="card-title">Name:{props.flight.airplane.name}</h5>
					<h4 className="card-text">Model:{props.flight.airplane.model}</h4>
					<p className="card-text">Capacity:{props.flight.airplane.capacity}</p>
				</div>
			</div>
			<div className="card" style={{float:"right",width:"15rem", display:"inline-block", backgroundColor:"MediumSeaGreen"}}>
				<h3>Lane</h3>
				<div className="card-body">
					<h5 className="card-title">No:{props.flight.lane.id}</h5>
				</div>
			</div>
		</React.Fragment>
	);
};