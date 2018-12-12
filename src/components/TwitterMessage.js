import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleClick = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  remainingCharacters = () => {
    let remaining = this.props.maxChars - this.state.message.length
    return <p>Remaing characters: {remaining}</p>
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleClick} value={this.state.message}/>
        {this.remainingCharacters()}
      </div>
    );
  }
}

export default TwitterMessage;
