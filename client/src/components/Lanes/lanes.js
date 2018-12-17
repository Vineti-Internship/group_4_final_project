/* eslint-disable no-unused-vars */
import React from "react";
import {Link} from "react-router-dom";
import Spinner from "../Spinner";

export default class Lanes extends React.Component {
	componentWillMount() {
    this.props.getLanes();
    this.props.getMaxCount();
  }

	render() {
    const {lanes, maxCount, history } = this.props;
    const count = maxCount.length !== 0 ? maxCount[0].value : -1;
    const canCreate = count === -1 || count > lanes.length;

		if(lanes)
			return (
				<div className="lanes">
        <br/>
        <br/>
					<table className="table table-striped table-bordered table-hover">
            <thead className="thead-dark">
                <tr>
                  <th>Lane No</th>
                  <th>Capacity</th>
                </tr>
            </thead>
            <tbody>
							{
                lanes.map(lane => {
                  return (
                    <tr key={lane.id} onClick={()=> history.push(`/lanes/${lane.id}`)} style={{cursor:"pointer"}}>
                      <th>{lane.id}</th>
                      <th>{lane.capacity}</th>
                    </tr>
                  );
							})}
						</tbody>
					</table>
          {
            canCreate &&
            <Link to="/newlane">Create Lane</Link>
          }
				</div>
			);
		return <Spinner/>;
	}
}