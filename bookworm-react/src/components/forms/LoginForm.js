import React from 'react';
import {Form, Button, Message, Input, Checkbox} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Validator from 'validator';
import {Link} from 'react-router-dom';

import InlineError from '../messages/inlineerror'

class LoginForm extends React.Component{
  state={
    data:{
    email: "",
    password: ""
    },
    loading: false,
    errors: {}
  }
onChange = e =>
this.setState({
  data:{...this.state.data, [e.target.name]: e.target.value}
});
onSubmit = () =>{
  const errors = this.validate(this.state.data);
  //because we dont want the data to go any further if there are errors
  this.setState({errors})
  if(Object.keys(errors).length === 0){
    this.setState({loading: true})
    this.props.submit(this.state.data)
    .catch(err => this.setState({ errors: err.response.data.errors, loading: false}))
  }
}
validate = data =>{
  const errors = {};
  if(!Validator.isEmail(data.email)) errors.email = "Invalid Email"
  if(!data.password) errors.password = "Can't be Blank";
  return errors
}

  render(){
    const {data, errors, loading} = this.state
    return(

      <Form onSubmit={this.onSubmit.bind(this)} loading={loading} >
      { errors.global && ( <Message negative>
      <Message.Header>Something went wrong </Message.Header>
      <p>{errors.global}</p>
    </Message>)}
      <Form.Field error={!!errors.email}>

      <Input type="email"
       id="email"
       name="email"
       placeholder="Email address"
      value={data.email}
      icon='user'
      iconPosition='left'
      onChange={this.onChange}
        />
          {errors.email && <InlineError text={errors.email} />}
      </Form.Field>
      <Form.Field error={!!errors.password}>

      <Input
      type="password"
      id="password"
      name="password"
      icon='lock'
      iconPosition='left'
      placeholder="Password"
      value={data.password}
      onChange={this.onChange}
        />
        {errors.password && <InlineError text={errors.password} />}
      </Form.Field>
      <Form.Field>
      <Checkbox label='Remember me'/>
      </Form.Field>
      <Form.Field>
      <Button fluid color="violet" style={{marginRight: '2em'}}>Login</Button>

      </Form.Field>
      <Link style={{alignSelf: 'center'}} to="/forgot_password">Forgot Password?</Link>
      </Form>
    )
  }
}

LoginForm.propTypes={
  submit: PropTypes.func.isRequired
}
export default LoginForm
