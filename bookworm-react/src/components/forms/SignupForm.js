import React from "react";
import PropTypes from "prop-types";
import {Form, Button, Message, Input} from 'semantic-ui-react';
import isEmail from "validator/lib/isEmail";
import InlineError from "../messages/inlineerror";

class SignupForm extends React.Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  validate = data => {
    const errors = {};

    if (!isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Can't be blank";

    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;

    return (
      <Form style={{width: "60vh"}} onSubmit={this.onSubmit} loading={loading} >
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
      <Button fluid color="violet" style={{marginRight: '2em'}}>Create Account</Button>

      </Form.Field>
      </Form>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SignupForm;
