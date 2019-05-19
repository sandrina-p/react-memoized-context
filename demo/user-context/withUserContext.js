import React from 'react'
import { UserContext } from './'

export default function withUserContext(Component) {
  const Connect = props => (
    <UserContext.Consumer>
      {context => <Component {...props} context={context} />}
    </UserContext.Consumer>
  )

  return Connect
}
