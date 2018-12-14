import React from "react";

class TwitterMessage extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      tweet: '',
      maxChars: this.props.maxChars
    };
  }

  handleTextInput = (e) => {
    const newCount = this.state.maxChars - 1
    console.log(e.target)
    this.setState({
      tweet: e.target.value,
      maxChars: newCount
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          value={this.state.tweet} 
          onChange={e => this.handleTextInput(e)}/>
        <label>Remaining: {this.state.maxChars}</label>
      </div>
    );
  }
}

export default TwitterMessage;
