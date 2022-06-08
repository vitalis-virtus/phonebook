import React from "react";
import styles from "./AuthNav.module.scss";
import { NavLink } from "react-router-dom";

const AuthNav = () => (
  <div className={styles.authNav}>
    <NavLink
      to="/register"
      exact
      className={styles.authNavLink}
      activeClassName={styles.authNavLinkActive}
    >
      Registration
    </NavLink>
    <NavLink
      to="/login"
      exact
      className={styles.authNavLink}
      activeClassName={styles.authNavLinkActive}
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
