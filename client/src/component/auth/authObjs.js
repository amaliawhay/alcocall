import React, { Component } from "react";

class userNameInput extends Component {
  state = {
    valid: this.props.userName,
  };
  handleChange = (event) => {
    this.setState({
      valid: event.target.userName.errors,
    });
  };

  render() {
    return (
      <input
        onChange={this.handleChange}
        value={this.state.userName}
      />
    );
  }
}

export default userNameInput;
