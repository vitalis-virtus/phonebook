import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";
// import styles from "./Views.module.css";
import styles from "./styles/LoginView.module.scss";

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onLoginSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className={styles.app}>
        <h1 className={styles.header}>Login page</h1>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label className={styles.label}>
            <input
              required
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
              className={styles.input}
              placeholder="Email"
            />
          </label>
          <label className={styles.label}>
            <input
              required
              type="text"
              name="password"
              value={password}
              onChange={this.handleChange}
              className={styles.input}
              placeholder="Password"
            />
          </label>
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLoginSubmit: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginView);
