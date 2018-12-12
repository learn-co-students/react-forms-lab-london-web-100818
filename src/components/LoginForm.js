import React from "react";
import App from '../App.js'

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
    
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
}

handleSubmit = (event) => {
  event.preventDefault()

  if (!!this.state.username && !!this.state.password) 
 this.props.onSubmit(this.state)
 
}

  render() {
    return (
      
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" value={this.state.username} type="text" onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" value={this.state.password} type="password" onChange={this.handleInputChange}/>
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
