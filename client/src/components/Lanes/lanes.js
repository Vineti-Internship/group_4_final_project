import React from "react";
import {Link} from "react-router-dom";
import Spinner from "../Spinner";

export default class Lanes extends React.Component {
  componentWillMount() {
		this.props.getLanes();
	}
	render() {
    if( this.props.lanes)
			return (
				<div className="lanes">
					<table>
						<tbody>
							<tr>
								<th>Lane No</th>
								<th>Capacity</th>
							</tr>
							{this.props.lanes.map(lane => {
								return (
									<tr key={lane.id}>
										<th>{lane.id}</th>
										<th>{lane.capacity}</th>
									</tr>
								);
							})}
						</tbody>
					</table>
					<Link to="/newlane">Create Lane</Link>
				</div>
      );
      return <Spinner/>;
	}
}