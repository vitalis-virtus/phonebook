import React, { useState } from "react";
import Navigation from "../Navigation";
import AuthNav from "../AuthNav";
import UserMenu from "../UserMenu";
import MenuBar from "../MenuBar/MenuBar";
import styles from "./AppBar.module.scss";
import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";

import { Turn as Hamburger } from "hamburger-react";

const AppBar = ({ isAuthenticated }) => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.navigation__wrapper}>
        <a href="/" className={styles.logo}>
          <GlobalSvgSelector id={"phone-book-logo"} />
          <h1>Phonebook</h1>
        </a>
        <Navigation />
      </div>

      <div
        className={styles.burger_btn}
        onClick={() => setMenuActive(!menuActive)}
      >
        <Hamburger
          rounded
          label="Show menu"
          hideOutline={false}
          easing="all ease-in-out 100ms"
          color="#f1f3ce"
          toggled={menuActive}
          toggle={setMenuActive}
          id="hamburger__react"
        />
      </div>

      <MenuBar
        active={menuActive}
        setActive={setMenuActive}
        items={isAuthenticated ? [<UserMenu />, <Navigation />] : [<AuthNav />]}
      />

      <div className={styles.menuWrapper}>
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
