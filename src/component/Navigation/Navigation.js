import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from "../../redux/auth";
import styles from "./Navigation.module.css";

const Navigation = ({ isAuthenticated }) => (
  <nav className={styles.navigation}>
    <NavLink
      to="/"
      exact
      className={styles.Link}
      activeClassName={styles.activeLink}
    >
      Home
    </NavLink>
    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        className={styles.Link}
        activeClassName={styles.activeLink}
      >
        Contacts
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});
export default connect(mapStateToProps, null)(Navigation);
