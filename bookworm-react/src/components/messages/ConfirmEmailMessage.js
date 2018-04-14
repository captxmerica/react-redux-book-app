import React from 'react'
import {Message} from 'semantic-ui-react'

const ConfirmEmailMessage = () =>(
  <Message compact size='large' info>
  <Message.Header> Please verify your email to unlock dashboard access </Message.Header>
  </Message>
)
export default ConfirmEmailMessage
