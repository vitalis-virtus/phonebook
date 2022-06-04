import React, { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../redux/auth/auth-operations";
import styles from "./Views.module.css";

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onRegisterSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      email: "",
      password: "",
    });
  };

  render() {
    const { name, password, email } = this.state;
    return (
      <div className={styles.app}>
        <h1 className={styles.header}>Registration page</h1>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label className={styles.label}>
            <p>Name</p>
            <input
              required
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            <p>Email</p>
            <input
              required
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            <p>Password</p>
            <input
              required
              type="text"
              name="password"
              value={password}
              onChange={this.handleChange}
              className={styles.input}
            />
          </label>
          <button className={styles.button} type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegisterSubmit: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
