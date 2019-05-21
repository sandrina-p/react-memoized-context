import React, { useMemo, useContext } from 'react'
import { withMemoizedContext, MemoizedConsumer } from '../src'
import { UserContext, UserProvider } from './user-context'
import FormBase from './Form'
import GreetingsBase from './Greetings'
import FutureBase from './Future'

// Add UserContext using withMemoizedContext()
function Form({ context }) {
  return <FormBase onChange={context.updateUser} />
}

const FormContexted = withMemoizedContext(UserContext)(Form, ['updateUser'])

// Add UserContext using hook useMemo...
function GreetingsContexted() {
  const { name } = useContext(UserContext)

  return useMemo(() => {
    // Logic not memoized goes here
    return <GreetingsBase name={name} />
  }, [name])
}

// Add UserContext using <MemoizedConsumer />
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
