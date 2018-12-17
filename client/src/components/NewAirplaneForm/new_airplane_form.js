import React from 'react';

export default class NewAirplaneForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      airline_id: "-1",
      name: "",
      model: "",
      capacity: "",
      time_on_lane: "",
      status: "Free",
      validAirline: true,
      validName: true,
      validModel: true,
      validCapacity: true,
      validTime: true
    };

    this.changeState = this.changeState.bind(this);
    this.selectChange = this.selectChange.bind(this);
    this.validateData = this.validateData.bind(this);
    this.submit = this.submit.bind(this);
    this.back = this.back.bind(this);
  }

  componentWillMount = () => {
    this.props.getAirlines();
  }

  validateData() {
    const { airline_id, name, model, capacity, time_on_lane } = this.state;
    let isValid = true;

    if (airline_id === "-1") {
      this.setState({ validAirline: false });
      isValid = false;
    } else {
      this.setState({ validAirline: true });
    }

    if (name.length === 0) {
      this.setState({ validName: false });
      isValid = false;
    }else {
      this.setState({ validName: true });
    }

    if (model.length === 0) {
      this.setState({ validModel: false });
      isValid = false;
    }

    if (capacity < 25 || capacity > 400) {
      this.setState({ validCapacity: false });
      isValid = false;
    }

    if (time_on_lane < 10 || time_on_lane > 100) {
      this.setState({ validTime: false });
      isValid = false;
    }

    return isValid;
  }

  changeState = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });

    this.validateData();
  }

  selectChange = e => {
    this.setState({ airline_id: e.target.value });
  }

  submit = e => {
    e.preventDefault();
    if (!this.validateData())
      return;

    const data = {
      ...this.state,
      status: "FREE"
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
      <select value={this.state.airline_id} onChange={this.selectChange} className="form-control">
        {
          this.state.airline_id === "-1" &&
          <option value="-1" key="-1">{"<---Select Airline--->"}</option>
        }
        {
          this.props.airlines.map(airline => {
            return (
              <option value={airline.id} key={airline.id}>{airline.name}</option>
            );
          })
        }
      </select>
    );
  }

  render = () => {
    const {
      name,
      model,
      capacity,
      time_on_lane,
      validAirline,
      validModel,
      validName,
      validCapacity,
      validTime
    } = this.state;

    return (
      <div className="newairplane">
        <center>
          <h2>Create Airplane</h2>
          <br/>
          <form style={{ width: "30rem" }} onSubmit={this.submit}>
            {
              this.airlineSelect()
            }
            {
              !validAirline ?
                <label className="no-airlinee-chosen-lbl" style={{color:"red"}}>Airline is required</label>
              : <div/>
            } <br/>
            <div class="input-group-prepend">
              <span class="input-group-text"  id="">Name</span>
              <input type="text" name="name" onChange={this.changeState} value={name} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/><br />
              {
                !validName ?
                 <label className="no-airplane-chosen-lbl" style={{color:"red"}}>Airplane is required</label>
                : <div/>
              }
            </div> <br/>
            <div class="input-group-prepend">
              <span class="input-group-text" id="">Model</span>
              <input type="text" name="model" onChange={this.changeState} value={model}  className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/><br />
              {
                !validModel ?
                  <label className="no-model-chosen-lbl" style={{color:"red"}}>Model is required</label>
                : <div/>
              }
            </div><br/>
            <div class="input-group-prepend">
              <span class="input-group-text" id="">Capacity</span>
              <input type="number" name="capacity" onChange={this.changeState} value={capacity} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/><br />
              {
                !validCapacity ?
                  <label className="no-capacity-chosen-lbl" style={{color:"red"}}>Capacity is required</label>
                : <div/>
              }
            </div><br/>
            <div class="input-group-prepend"  >
              <span class="input-group-text" id="">Time on lane</span>
              <input type="number" name="time_on_lane" onChange={this.changeState} value={time_on_lane} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/><br />
              {
                !validTime ?
                  <label className="no-time-chosen-lbl" style={{color:"red"}}>Time on lane is required</label>
                : <div/>
              }
            </div><br/>
            <div className="btn-group mr-2" role="group" aria-label="First group">
              <button className="btn btn-primary" onClick={this.back}>Back</button>
            </div>
            <div className="btn-group mr-2" role="group" aria-label="Second group">
              <input className="btn btn-success" type="submit" value="Create" />
            </div>
          </form>
        </center>
      </div>
    )
  }
}
