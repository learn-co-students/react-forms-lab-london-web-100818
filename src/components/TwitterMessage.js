import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      charsLeft: 140
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
      charsLeft: this.props.maxChars - e.target.value.length
    })
  } 

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" value={this.state.message}
          onChange={this.handleChange}/>
        <p>Characters left: {this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
