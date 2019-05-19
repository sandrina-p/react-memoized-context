import React from 'react'
import Count from './Count'

const style = {
  maxWidth: '15rem',
  border: '1px solid cornflowerblue',
  borderRadius: '0.5rem',
  padding: '0.5rem 1rem',
}

export default function Greetings({ intro = 'Hey there', name }) {
  return (
    <p style={style} data-testid="greetings">
      {intro} {name || 'person'}! <Count />
    </p>
  )
}
