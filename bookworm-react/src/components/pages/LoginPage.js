import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LoginForm from '../forms/LoginForm';
import {login} from '../../actions/auth.js'
import {Header} from 'semantic-ui-react'
import './LoginPage.css'


class LoginPage extends React.Component{
submit = (data) => this.props.login(data).then(() => this.props.history.push('/'))


  render(){
    return(
      <div className="form-holder" style={{ display: 'flex', flexDirection: 'column', alignItems: "center", height: '90vh', marginTop: '10vh'}}>
      <Header textAlign="left" size='huge'> Please Sign in </Header>


      <LoginForm submit={this.submit} />


</div>
    )
  }
}
LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(null, {login})(LoginPage);
