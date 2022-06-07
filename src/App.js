import React, { Component, Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import AppBar from "./component/AppBar/AppBar";
import Container from "./component/Container";
import './App.css'

import { authOperations } from "./redux/auth";
import { connect } from "react-redux";
import PrivateRoute from "./component/PrivateRoute";
import PublicRoute from "./component/PublicRoute";

const HomeView = lazy(() => import("./view/HomeView"));
const ContactsView = lazy(() => import("./view/ContactsView"));
const RegisterView = lazy(() => import("./view/RegisterView"));
const LoginView = lazy(() => import("./view/LoginView"));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <div className="App_container">
        <AppBar />
        <Container>
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <PublicRoute exact path="/" component={HomeView} />
              <PublicRoute
                restricted
                redirectTo="/contacts"
                path="/register"
                component={RegisterView}
              />
              <PublicRoute
                restricted
                redirectTo="/contacts"
                path="/login"
                component={LoginView}
              />
              <PrivateRoute
                redirectTo="/login"
                path="/contacts"
                component={ContactsView}
              />
            </Switch>
          </Suspense>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
