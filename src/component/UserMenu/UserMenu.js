import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import styles from "./UserMenu.module.css";

const UserMenu = ({ email, onLogout }) => (
  <div className={styles.userMenu}>
    <span>Hello, </span>
    <span className={styles.email}>{email}</span>
    <button className={styles.logoutBtn} type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
