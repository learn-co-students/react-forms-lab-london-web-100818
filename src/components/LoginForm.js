import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChangeUser = (event) => {
    this.setState({
      username: event.target.value
    })
    console.log(this.state)
  }

  handleChangePass = (event) => {
    this.setState({
      password: event.target.value
    })
    console.log(this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.state.username.length !== 0 && this.state.password.length !== 0
    ? this.props.onSubmit(this.state)
    : alert('enter a useranme and password')
  }


  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <div>
          <label>
            username
            <input id="username" name="username" type="text" onChange={ (event) => this.handleChangeUser(event)} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={ (event) => this.handleChangePass(event)} value={this.state.password}/>
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
