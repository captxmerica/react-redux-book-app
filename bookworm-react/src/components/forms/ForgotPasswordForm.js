import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Message, Input } from "semantic-ui-react";
import isEmail from "validator/lib/isEmail";
import InlineError from "../messages/inlineerror";

class ForgotPasswordForm extends React.Component {
  state = {
    data: {
      email: ""
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
    return errors;
  };

  render() {
    const { errors, data, loading } = this.state;

    return (

      <Form  onSubmit={this.onSubmit} loading={loading}>
        {!!errors.global && <Message negative>{errors.global}</Message>}
        <Form.Field error={!!errors.email}>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            icon='mail'
            iconPosition='left'
            value={data.email}
            onChange={this.onChange}
            style={{width: '80vh'}}
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <Button   style={{width: '80vh'}} color='yellow'>Send my validation code</Button>
      </Form>
    );
  }
}

ForgotPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default ForgotPasswordForm;
