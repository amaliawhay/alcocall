import React, { Component } from "react";
import { Link } from "react-router-dom";
//TODO: Import necessary dependencies for materialize

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
}
