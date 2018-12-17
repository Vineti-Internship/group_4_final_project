import React from 'react';
import './new_lane_form.css'

export  default class NewLaneForm extends React.Component{
  constructor(props) {
    super(props);

		this.state={
      capacity: 0,
      canSave: false,
    };

    this.changeState = this.changeState.bind(this);
    this.submit = this.submit.bind(this);
  }

  async componentWillMount(){
    const {match} = this.props
		const id = match ? match.params.laneId : -1;
    await this.props.getLane(id);
    const { lane } = this.props;

    if (lane) {
      const { capacity} = lane;
      this.setState({
      capacity: capacity
      });
    }
  }

  changeState = e => {
    const {name, value} = e.target;
    const { lane } = this.props;
    const canSave = lane ? lane.capacity <= value : value > 0;

    this.setState({
      [name]: value,
      canSave
    });
  }

  submit = e => {
    e.preventDefault();
    const {history, createLane, updateLane, lane} = this.props;
    const data = {
      capacity: this.state.capacity
    };

    lane ? updateLane(lane.id, data) : createLane(data);
    history.push("/lanes");
  }

  back = e => {
    e.preventDefault();
    this.props.history.push("/lanes");
  }

  render = () => {
    const { capacity, canSave } = this.state;
    
    return(
      <div className="new-lane-form">
        <center>
          <h2>Create Lane</h2>
          <form style={{width:"30rem"}} onSubmit={this.submit}>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="">Capacity</span>
              </div>
              <input className="capacity-input" type="number" name="capacity" onChange={this.changeState} value={capacity} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
              <br/>
            </div>
            <br/>
            <div class="btn-group mr-2" role="group" aria-label="First group">
              <button className="btn btn-primary" onClick={this.back}>Back</button>
            </div>
            <div class="btn-group mr-2" role="group" aria-label="Second group">
              <input className="btn btn-success" type="submit" value="Create" disabled={!canSave} />
            </div>
          </form>
        </center>
      </div>
    )
  }
}

