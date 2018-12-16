import React from 'react';

export  default class NewAirplaneForm extends React.Component{
  constructor(props){
		super(props);
		this.state={
      airline: " ",
      name: " ",
      model: " ",
      capacity:" ",
      time_on_lane: " ",
      status: "Free"
		};
  this.changeState = this.changeState.bind(this);
  this.submit = this.submit.bind(this);
  this.back = this.back.bind(this);
  }

  changeState = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]:value
    });
  }

  submit = (e) => {
    e.preventDefault();
    const data = {
      name: this.state.airline,
      name: this.state.name,
      model: this.state.model,
      capacity: this.state.capacity,
      time_on_lane: this.state.time_on_lane,
      status: "free"
    };

    this.props.createAirplane(data);
    this.props.history.push("/airplanes");
  }

  back = (e) => {
    e.preventDefault();
    this.props.history.push("/airplanes");
  }

  getAirlines

  componentWillMount() {
    const { airplane } = this.props;

    if (airplane) {
      const { name, model, capacity, time_on_lane} = airplane;
      this.setState({
      name: name,
      model: model,
      capacity: capacity,
      time_on_lane: time_on_lane
    });
    }
  }
  render(){
    const { name, model, capacity, time_on_lane} = this.state;

    return(
    <div className="newairplane">
    <center>
    <h5>Create Airplane</h5>
      <form style={{width:"30rem"}} onSubmit={this.submit}>
        <label>Airline:</label>
        <select>

        </select><br/>
        <label>Name:</label>
        <input type="text" name = "name" onChange={this.changeState} value={name} disabled={false}/><br/>
        <label>Model:</label>
        <input type="text" name = "model" onChange={this.changeState} value={model} disabled={false}/><br/>
        <label>Capacity:</label>
        <input type="number" name = "capacity" onChange={this.changeState} value={capacity} disabled={false}/><br/>
        <label>Time on lane:</label>
        <input type="number" name = "time_on_lane" onChange={this.changeState} value={time_on_lane} disabled={false}/><br/>
        <div class="btn-group mr-2" role="group" aria-label="First group">
          <button className="btn btn-primary" onClick={this.back}>Back</button>
          </div>
          <div class="btn-group mr-2" role="group" aria-label="Second group">
          <input className="btn btn-success" type="submit" value="Create" />
        </div>
      </form>
      </center>
    </div>
    )
  }
}
