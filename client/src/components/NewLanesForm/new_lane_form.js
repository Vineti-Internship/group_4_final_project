import React from 'react';
import './new_lane_form.css'

export  default class NewLaneForm extends React.Component{
  constructor(props){
		super(props);
		this.state={
			capacity:" "
		};
  this.changeState = this.changeState.bind(this);
  this.submit = this.submit.bind(this);
}

changeState = (e) => {
  const {name, value} = e.target;
  this.setState({
    [name]:value
  });
  let isEditMode=false;
}

submit = (e) => {
  e.preventDefault();
  const data = {
    capacity: this.state.capacity
  };
  
  this.props.createLane(data);
  this.props.history.push("/lanes");
  }

back = (e) => {
  e.preventDefault();
  this.props.history.push("/lanes");
	}
  
componentWillMount() {
  const { lane } = this.props;

  if (lane) {
    const { capacity} = lane;
    this.setState({
    capacity: capacity
    });
  }
}

  render(){
    const { lane } = this.props;
    const isEditMode = lane ? true : false;
    const { capacity} = this.state;
    
    return(
      <div className="new-lane-form">
      <center>
        <h2>Create Lane</h2>
        <form style={{width:"30rem"}} onSubmit={this.submit}>
          <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="">Capacity</span>
          </div>
          <input className = "capacity-input" type="number" name = "capacity" onChange={this.changeState} value={capacity}   className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/><br/>   
          </div><br/>
          
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

