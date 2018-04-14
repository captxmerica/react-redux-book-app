import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import SignupPage from "./components/pages/SignupPage";
import ConfirmationPage from "./components/pages/ConfirmationPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import ResetPasswordPage from "./components/pages/ResetPasswordPage";
import NewBookPage from "./components/pages/NewBookPage";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import TopNavigation from "./components/navigation/TopNavigation";
import HomepageLayout from './components/pages/HomepageLayout';


const App = ({ location, isAuthenticated }) => (
  <div className='container-ui'>

 <UserRoute
    location={location}
    path="/dashboard"
    exact
    component={DashboardPage}
  />

<Route location={location} path="/" exact component={TopNavigation} />
    <Route location={location} path="/" exact component={HomepageLayout} />

<Route location={location} path="/confirmation/:token" exact component={TopNavigation} />
    <Route
      location={location}
      path="/confirmation/:token"
      exact
      component={ConfirmationPage}
    />
    <Route location={location} path="/login" exact component={TopNavigation} />
    <GuestRoute location={location} path="/login" exact component={LoginPage} />
    <Route location={location} path="/signup" exact component={TopNavigation} />
    <GuestRoute
      location={location}
      path="/signup"
      exact
      component={SignupPage}
    />
    <Route location={location} path="/forgot_password" exact component={TopNavigation} />
    <GuestRoute
      location={location}
      path="/forgot_password"
      exact
      component={ForgotPasswordPage}
    />
    <Route location={location} path="/reset_password/:token" exact component={TopNavigation} />
    <GuestRoute
      location={location}
      path="/reset_password/:token"
      exact
      component={ResetPasswordPage}
    />
    <Route location={location} path="/books/new" exact component={TopNavigation} />
    <UserRoute
      location={location}
      path="/books/new"
      exact
      component={NewBookPage}
    />

  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email
  };
}

export default connect(mapStateToProps)(App);
// import React from 'react';
//
// class LoginForm extends React.Component{
//   state={}
//
//   render(){
//     return(
//       <div></div>
//     )
//   }
// }
//
// export default LoginForm
