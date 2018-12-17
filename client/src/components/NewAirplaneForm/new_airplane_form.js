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
  this.selectChange = this.selectChange.bind(this);
  this.submit = this.submit.bind(this);
  this.back = this.back.bind(this);
  }

  componentWillMount = () => {
    this.props.getAirlines();
    const { airplane } = this.props;

    if (airplane) {
      const { name, model, capacity, time_on_lane} = airplane;

      this.setState({
        name,
        model,
        capacity,
        time_on_lane
      });
    }
  }

  changeState = e => {
    const {name, value} = e.target;

    this.setState({
      [name]:value
    });
  }

  selectChange = e => {
    this.setState({airline_id: e.target.value});
  }

  submit = e => {
    e.preventDefault();

    const data = {
      ...this.state,
      status: "free"
    };

    this.props.createAirplane(data);
    this.props.history.push("/airplanes");
  }

  back = e => {
    e.preventDefault();
    this.props.history.push("/airplanes");
  }

  airlineSelect = () => {
    return (
      <select value={this.state.airline_id} onChange={this.selectChange} class="form-control">
        {
          this.props.airlines.map(airline => {
            return (
              <option value={airline.id}>{airline.name}</option>
            );
          })
        }
      </select>
    );
  }

  render = () => {
    const { name, model, capacity, time_on_lane} = this.state;

    return(
    <div className="newairplane">
    <center>
    <h5>Create Airplane</h5>
      <form style={{width:"30rem"}} onSubmit={this.submit}>
        <label>Airline:</label>
       {
         this.airlineSelect()
        }
        <label>Name:</label>
        <input type="text" name = "name" onChange={this.changeState} value={name} /><br/>
        <label>Model:</label>
        <input type="text" name = "model" onChange={this.changeState} value={model} /><br/>
        <label>Capacity:</label>
        <input type="number" name = "capacity" onChange={this.changeState} value={capacity} /><br/>
        <label>Time on lane:</label>
        <input type="number" name = "time_on_lane" onChange={this.changeState} value={time_on_lane} /><br/>
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
