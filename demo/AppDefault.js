import React from 'react'
import { withUserContext, UserContext, UserProvider } from './user-context'
import FormBase from './Form'
import GreetingsBase from './Greetings'
import FutureBase from './Future'

// Add UserContext to Form...
function Form({ context }) {
  return <FormBase onChange={context.updateUser} />
}

const FormContexted = withUserContext(Form)

// Add UserContext to GreetingsBase...
function Greetings({ context }) {
  return <GreetingsBase name={context.name} />
}

const GreetingsContexted = withUserContext(Greetings)

// Add UserContext to FutureBase using
function FutureContexted() {
  return (
    <UserContext.Consumer>
      {({ age }) => <FutureBase age={age} />}
    </UserContext.Consumer>
  )
}

function App() {
  return (
    <UserProvider>
      <FormContexted />
      <GreetingsContexted />
      <FutureContexted />
    </UserProvider>
  )
}

export default App
