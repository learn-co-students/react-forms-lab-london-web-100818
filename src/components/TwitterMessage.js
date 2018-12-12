import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      // maxChars: '',
      // counter: 140,
      value: ''
    };
  }
  
  handleChange = (event) => {
    this.setState({
     counter: this.props.maxChars - event.target.value.length,
      value: event.target.value
    })

  }


  render() {
    
    return (
      <div>
      
        <strong>Your message:</strong>
        
        <p>{this.props.maxChars - this.state.value.length}</p>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default TwitterMessage;
