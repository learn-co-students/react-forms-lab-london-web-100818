import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onSubmit: this.props.onSubmit,
      username: '',
      password: ''
    };
  }

  handleUserNameInput = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordInput = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text"
              onChange={e => this.handleUserNameInput(e)}
              value={this.state.username}
              />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              name="password" 
              type="password"
              onChange={e => this.handlePasswordInput(e)}
              value={this.state.password}
              />
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
