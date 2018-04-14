import React from 'react';
import ForgotPasswordForm from '../forms/ForgotPasswordForm';
import {Message} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {resetPasswordRequest} from '../../actions/auth';
import {Header, Segment, List} from 'semantic-ui-react'

class ForgotPasswordPage extends React.Component{
  state={
    success: false
  }

submit = data => this.props.resetPasswordRequest(data).then(() =>
this.setState({success: true}))


  render(){

    return(
  <Segment.Group raised style={{marginTop: '3em', width: '80%', marginLeft: '2em'}}>
      <Segment style={{paddingTop: '4em'}} fluid>
      <Header as='h1'> Forgot your password? </Header>
      </Segment>

        <Segment color='yellow' fluid><Header as='h3' style={{alignSelf:'top'}}>      Let us help you, Follow the steps below to reset your account </Header>  </Segment >
        <Segment size='huge' raised fluid><Header as='h5' style={{alignSelf:'top'}}>
          <List relaxed='very'>
          <List.Item>1. Enter you account email address</List.Item>
          <List.Item>2. Wait for your recovery details to be sent</List.Item>
          <List.Item>3. Follow instructions and be re-united with your account</List.Item>
          </List>    </Header>  </Segment >
        <Segment fluid>
      {this.state.success ? ( <Message>Email has been sent.</Message> ) : (
  <ForgotPasswordForm submit={this.submit}/> ) }</Segment>

      </Segment.Group>
    )
  }
}

ForgotPasswordPage.propTypes = {
  resetPasswordRequest: PropTypes.func.isRequired
}


export default connect(null, {resetPasswordRequest})(ForgotPasswordPage)
