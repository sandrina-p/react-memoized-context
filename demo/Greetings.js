import React from 'react'
import Count from './Count'

const style = {
  maxWidth: '15rem',
  border: '1px solid cornflowerblue',
  borderRadius: '0.5rem',
  padding: '0.5rem 1rem',
}

export default function Greetings({ name }) {
  return (
    <p style={style} data-testid="greetings">
      Hello {name || 'person'}! <Count />
    </p>
  )
}
