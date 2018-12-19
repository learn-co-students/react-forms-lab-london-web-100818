import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  handleChange = (event) => {

    this.setState({
     text: event.target.value
    })
    console.log(this.state.text.length)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>

        <input type="text"
        onChange={event => {
          this.state.text.length < this.props.maxChars
          ?this.handleChange(event)
          : console.log(this.state.text)
        }}
        value={this.state.text}/>
        <p> { this.props.maxChars - this.state.text.length }</p>
      </div>
    );
  }
}

export default TwitterMessage;
