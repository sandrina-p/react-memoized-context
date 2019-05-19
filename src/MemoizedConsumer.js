import React from 'react'
import MemoContext from './MemoContext'

function MemoizedConsumer({ context: Context, memoKeys, children }) {
  return (
    <Context.Consumer>
      {context => (
        <MemoContext memoKeys={memoKeys} context={context}>
          {children}
        </MemoContext>
      )}
    </Context.Consumer>
  )
}

export default MemoizedConsumer
