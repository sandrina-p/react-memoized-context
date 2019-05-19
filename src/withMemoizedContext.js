import React from 'react'
import { getDisplayName } from './utils'
import MemoContext from './MemoContext'

// Context HoC
// Connect a given Context Consumer to MemoizedContext,
// responsible to make a "wall" between the full context and keys to memo.
function withContext(Context) {
  const MemoizedContext = props => (
    <Context.Consumer>
      {context => <MemoContext {...props} context={context} />}
    </Context.Consumer>
  )

  return MemoizedContext
}

// Connect MemoizedContext to a Component
function withMemoized(MemoizedContext) {
  const Component = (Component, memoKeys) => {
    if (!memoKeys && process.env.NODE_ENV === 'development') {
      console.warning( /* eslint-disable-line */
        `creact-memoized-context - withMemoizedContext - missing context memoKeys. You might have forgotten to pass them down at ${getDisplayName(
          '',
          Component
        )}`
      )
    }

    const connect = props => (
      <MemoizedContext memoKeys={memoKeys}>
        {memoContext => <Component {...props} context={memoContext} />}
      </MemoizedContext>
    )

    connect.displayName = getDisplayName('MemoizedContext', Component)

    return connect
  }

  return Component
}

const withMemoizedContext = Context => withMemoized(withContext(Context))

export default withMemoizedContext

/* ----- HOW TO USE --------

// --- Greetings.js
function Greetings({ context, intro, ...otherProps }) {
    return <p>{intro} { context.name }!</p>;
}

// Only re-renders if UserContext's name updates.
export default withMemoizedContext(UserContext)(Greetings, ['name']);

// --- LogIn.js
<Greetings intro="Good Morning" />
// Output -> <p>Good Morning Sandy</p>
*/
