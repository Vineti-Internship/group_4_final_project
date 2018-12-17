import React from 'react';

export  default class EditUser extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      role: "-1",
      canSave: false,
    };

    this.selectChange = this.selectChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  async componentWillMount(){
    const {match} = this.props
		const id = match ? match.params.userId : -1;
    await this.props.getUserById(id);
    const { user } = this.props;

    if (user) {
      const { role } = user;
      this.setState({ role });
    }
  }

  submit = e => {
    e.preventDefault();
    const {history, user, updateUser} = this.props;
    const data = {
      role: this.state.role
    };

   updateUser(user.id, data);
   history.push("/users");
  }

  back = e => {
    e.preventDefault();
    this.props.history.push("/users");
  }

  selectChange = e => {
    this.setState({ role: e.target.value });
  }

  roleSelect = () => {
    return (
      <select value={this.state.role} onChange={this.selectChange} className="form-control">
        {
          this.state.role === "-1" &&
          <option value="-1" key="-1">{"<---Select Role--->"}</option>
        }
        
          <option value={"f_manager"} key={"f_manager"}>{"Flight Manager"}</option>
          <option value={"l_manager"} key={"l_manager"}>{"Line Manager"}</option>
          <option value={"admin"} key={"admin"}>{"Admin"}</option>
          <option value={"client"} key={"client"}>{"Client"}</option>
      </select>
    );
  }

  
  render = () => {
    const {user} = this.props;
    return(
      <div className="edit-user-form">
        <center>
          <form style={{ width: "30rem" }} onSubmit={this.submit}>
            <div className="profile" style={{width:"40rem"}}>
            <div className="jumbotron">
              <div>name: <h3>{user.name}</h3></div>
              <div>email: <h4 className="user-email">{user.email}</h4></div>
              </div>
                <p className="lead">current role: {user.role}</p>
                <hr className="my-4"/>
                {
                  this.roleSelect()
                }
              </div>
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