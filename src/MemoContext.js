import React from 'react'
import { filterObject } from './utils'

function MemoContext({ children, memoKeys, context }) {
  const contextToSpread = filterObject(context, memoKeys)

  return children(contextToSpread)
}

function isContextTheSame(props, nextProps) {
  const { children, memoKeys, context } = props
  const diffChildren = children !== nextProps.children

  // If children changed, no need to filter memoKeys
  if (diffChildren || !memoKeys) {
    return false
  }

  // Check if any context key from memoKeys changed...
  const keysHadChange = memoKeys.find(
    key => context[key] !== nextProps.context[key]
  )

  // ..if yes, avoid a re-render.
  return !keysHadChange
}

export default React.memo(MemoContext, isContextTheSame)
