import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      input: "",
      charactersLeft: 140
    };
  }
  handleChange = event =>{
    this.setState({
      input: event.target.value,
      charactersLeft: this.props.maxChars-event.target.value.length
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={(event)=>this.handleChange(event)} value={this.state.input} type="text" />
        <p> {this.state.charactersLeft} remaining characters</p>
      </div>
    );
  }
}

export default TwitterMessage;
