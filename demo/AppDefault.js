import React, { useContext } from 'react'
import { withUserContext, UserContext, UserProvider } from './user-context'
import FormBase from './Form'
import GreetingsBase from './Greetings'
import FutureBase from './Future'

// Add UserContext using Context HOC...
function Form({ context }) {
  return <FormBase onChange={context.updateUser} />
}

const FormContexted = withUserContext(Form)

// Add UserContext using hook useContext...
function GreetingsContexted() {
  const { name } = useContext(UserContext)

  return <GreetingsBase name={name} />
}

// Add UserContext using hook Consumer...
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
