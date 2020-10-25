import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../app/actions/authActions";
import classnames from "classnames";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      //TODO: set up password confirmation: password2: "",
      age: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps.errors);
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
      console.log(this.state.errors);
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      userName: this.state.userName,
      password: this.state.password,
      //TODO: set up password confirmation: password2: this.state.password2,
      age: this.state.age,
    };

    console.log(newUser);
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="row login-content">
          <div className="col s8">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left link-color">
                keyboard_backspace
              </i>{" "}
              Back to home
            </Link>
            <div
              className="col s12"
              style={{ paddingLeft: "11.250px" }}
            >
              <h2>
                Register Below
              </h2>
              <p className="grey-text text-darken-1">
                Already have an account?{" "}
                <Link className="register-link" to="/login">Login Here</Link>
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
                    invalid: errors.userName,
                  })}
                />
                <label className="button" htmlFor="userName">Username</label>
                <span className="red-text">
                  {errors.userName}
                </span>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password,
                  })}
                />
                <label className="button" htmlFor="password">Password</label>
                <span className="red-text">
                  {errors.password}
                </span>
              </div>

              <div className="input-field col s12">
                <h6 className="age-label">Please enter your age</h6>
                <input
                  onChange={this.onChange}
                  value={this.state.age}
                  error={errors.age}
                  id="age"
                  className={classnames("", {
                    invalid: errors.age,
                  })}
                />
                {/* <label htmlFor="username">Age</label> */}
                <span className="red-text">
                  {errors.age}
                </span>
                <div
                className="col s12"
                style={{ paddingLeft: "11.250px" }}
              >
                <button
                  style={{
                    width: "150px",
                    // borderRadius: "3px",
                    // letterSpacing: "1.5px",
                    marginTop: "1rem",
                  }}
                  type="submit"
                  className="btn light-blue darken-1 card-buttons"
                >
                  Sign up
                </button>
              </div>
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
