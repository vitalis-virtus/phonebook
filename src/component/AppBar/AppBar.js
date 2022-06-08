import React from "react";
import Navigation from "../Navigation";
import AuthNav from "../AuthNav";
import UserMenu from "../UserMenu";
import styles from "./AppBar.module.scss";
import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";

const AppBar = ({ isAuthenticated }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation__wrapper}>
        <a href="/" className={styles.logo}>
          <GlobalSvgSelector id={"phone-book-logo"} />
          <h1>Phonebook</h1>
        </a>
        <Navigation />
      </nav>

      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
