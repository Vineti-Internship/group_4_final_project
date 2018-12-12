import React from "react";
import "./NewFlightForm.css";

class NewFlightForm extends React.Component {
	render() {
		return (
			<div className="new-flight-form">
				<h1>Create New Flight</h1>
				<form>
					<label>Flight destination:</label>
					<input type="text"/>
					<br/>
					<label>Flight start:</label>
					<input type="datetime-local"/>
					<br/>
					<label>Flight duration:</label>
					<input type="time" className="without_ampm" />
					<br/>
					<label>Passanger count:</label>
					<input type="number"/>
					<br/>
					<button>Find available airplane</button>
					<div className="found-airplanes">
						{Array(3).fill(0).map(() =>{
							return (
								<div className="card" style={{width:"18rem", display:"inline-block"}}>
									<div className="card-body">
										<h5 className="card-title">Some Airplane</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" className="btn btn-primary" style={{backgroundColor:"red"}}>Go somewhere</a>
									</div>
								</div>
							);	
						})}
					</div>
					<button>Find available lane</button>
					<br/>
					<div className="found-lanes">
						{Array(3).fill(0).map(() =>{
							return (
								<div className="card" style={{width:"18rem", display:"inline-block"}}>
									<div className="card-body">
										<h5 className="card-title">Some Lane</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" className="btn btn-primary">Go somewhere</a>
									</div>
								</div>
							);	
						})}
					</div>
					<br/>
					<button>Cancel</button>
					<input type="submit"/>
				</form>
			</div>
		);
	}
}

export default NewFlightForm;
