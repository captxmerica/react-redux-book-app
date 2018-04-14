import React from 'react'
import { Message } from 'semantic-ui-react'

const SuccessMessage = () => (

  <Message
    size='large'
    success
    header='Welcome back!'
    content='Feel Free to add any books you`ve read as well as any others you`re interested in.'
    style={{paddingBottom: '0px', marginTop: '1em', marginLeft: '.7em'}}
  />
)

export default SuccessMessage
