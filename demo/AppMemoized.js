import React from 'react'
import { withMemoizedContext, MemoizedConsumer } from '../src'
import { UserContext, UserProvider } from './user-context'
import FormBase from './Form'
import GreetingsBase from './Greetings'
import FutureBase from './Future'

// Add UserContext to Form using withMemoizedContext()
function Form({ context }) {
  return <FormBase onChange={context.updateUser} />
}

const FormContexted = withMemoizedContext(UserContext)(Form, ['updateUser'])

// Add UserContext to GreetingsBase using withMemoizedContext()
function Greetings({ context }) {
  return <GreetingsBase name={context.name} intro="Hello" />
}

const GreetingsContexted = withMemoizedContext(UserContext)(Greetings, ['name'])

// Add UserContext to FutureBase using <MemoizedConsumer />
function FutureContexted() {
  return (
    <MemoizedConsumer context={UserContext} memoKeys={['age']}>
      {({ age }) => <FutureBase age={age} />}
    </MemoizedConsumer>
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
