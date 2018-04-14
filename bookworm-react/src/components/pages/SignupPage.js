import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SignupForm from "../forms/SignupForm";
import { signup } from "../../actions/users";
import {Header, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import './SignUpPage.css'


class SignupPage extends React.Component {
  submit = data =>
    this.props.signup(data).then(() => this.props.history.push("/"));

  render() {
    return (
      <div className="form-holder" style={{ display: 'flex', flexDirection: 'column', alignItems: "center", height: '90vh', marginTop: '10vh'}}>
      <Header textAlign="left" size='huge'> Create a New Account </Header>
        <SignupForm submit={this.submit} />

        <Button color='green' style={{marginTop: '1em', width: '60vh'}}>  <Link style={{alignSelf: 'center', color: "white"}} to="/login">Login with existing account</Link></Button>
      </div>
    );
  }
}

SignupPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired
};

export default connect(null, { signup })(SignupPage);
