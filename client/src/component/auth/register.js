import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../app/actions/authActions";
//import { userNameInput } from "./authObjs";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
      //password2: "",
      age: "",
      errors: {},
    };
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState)
  // }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      userName: this.state.userName,
      password: this.state.password,
      //password2: this.state.password2,
      age: this.state.age,
    };

    console.log(newUser);
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">
                keyboard_backspace
              </i>{" "}
              Back to home
            </Link>
            <div
              className="col s12"
              style={{ paddingLeft: "11.250px" }}
            >
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account?{" "}
                <Link to="/login">Login</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.userName}
                  error={errors.userName}
                  id="userName"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name,
                  })}
                />
                <label htmlFor="userName">Username</label>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                />
                <label htmlFor="password">Password</label>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.age}
                  error={errors.age}
                  id="age"
                  type="password"
                />
                <label htmlFor="age">Age</label>
              </div>

              <div
                className="col s12"
                style={{ paddingLeft: "11.250px" }}
              >
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(
  withRouter(Register)
);
