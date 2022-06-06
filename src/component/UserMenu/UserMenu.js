import React from "react";
import { connect } from "react-redux";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import { authSelectors, authOperations } from "../../redux/auth";
import styles from "./UserMenu.module.css";

const UserMenu = ({ email, onLogout }) => (
  <div className={styles.userMenu}>
    <div className={styles.userMenu__userInfo}>
      <GlobalSvgSelector id="user-profile-logo" />
      <span>{email}</span>
    </div>
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
