import React from 'react'
import Count from './Count'

const style = {
  maxWidth: '15rem',
  border: '1px solid cornflowerblue',
  borderRadius: '0.5rem',
  padding: '0.5rem 1rem',
}

export default function Future({ age }) {
  const futureYear = 2050
  const yearDiff = futureYear - new Date().getFullYear()
  const futureAge = age * 1 + yearDiff

  return (
    <p style={style} data-testid="future">
      In {futureYear} you will be {futureAge} years old.
      <Count />
    </p>
  )
}
