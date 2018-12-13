import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""

    };
  }
  handleSubmit = (event) =>{
    event.preventDefault();
    if (!this.state.username || !this.state.password) return
        this.props.onSubmit(this.state)  }
        
  handleChangeUser = event =>{
    this.setState({
      username: event.target.value
    })
  }

  handleChangePass = event =>{
    this.setState({
      password: event.target.value
    })
  }
    render() {
    return (
      <form onSubmit={(event)=>this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input value={this.state.username} onChange={(e)=>this.handleChangeUser(e)} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" value={this.state.password} onChange={(e)=>this.handleChangePass(e)}name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
