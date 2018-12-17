import React from "react";
import {Link} from "react-router-dom";
import Spinner from "../Spinner";

export default class Airplanes extends React.Component {
  componentDidMount() {
		this.props.getAirplanes();
	}
	render() {
    if( this.props.airplanes)
			return (
				<div className="airplanes">
          <br/>
          <br/>
					<table className="table table-striped table-bordered table-hover">
            <thead className="thead-dark">
							<tr>
                <th>Airline</th>
                <th>Name </th>
								<th>Model </th>
								<th>Capacity</th>
                <th>Time on lane</th>
                <th>Status</th>
							</tr>
            </thead>
            <tbody>
							{this.props.airplanes.map(airplane => {
								return (
									<tr key={airplane.id}>
										<th>{airplane.airline.name}</th>
                    <th>{airplane.name}</th>
                    <th>{airplane.model}</th>
                    <th>{airplane.capacity}</th>
                    <th>{airplane.time_on_lane}</th>
                    <th>{airplane.status}</th>
									</tr>
								);
							})}
            </tbody>
					</table>
					<Link to="/newairplane">Create Airplane</Link>
				</div>
      );
      return <Spinner/>;
	}
}
