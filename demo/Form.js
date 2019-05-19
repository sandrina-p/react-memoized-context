import React, { useEffect } from 'react'
import Count from './Count'

// TODO - add css-in-js or css modules
const styles = {
  legend: {
    color: 'cornflowerblue',
  },
  fieldset: {
    maxWidth: '15rem',
    border: '1px solid cornflowerblue',
    borderRadius: '0.5rem',
    padding: '1rem',
  },
  text: {
    margin: 0,
  },
}

export default function Form({ onChange }) {
  const name = 'Sandy'
  const age = 24

  useEffect(() => {
    onChange({ name })
    onChange({ age })
  }, [])

  const handleOnChange = (field, e) => onChange(field, e.target.value)

  return (
    <fieldset style={styles.fieldset} data-testid="form">
      <legend style={styles.legend}>Play to see the renders count</legend>
      <label>
        <p style={styles.text}>Name:</p>
        <input
          type="text"
          name="name"
          defaultValue={name}
          onChange={e => handleOnChange('name', e)}
        />
      </label>
      <label>
        <p style={styles.text}>Age:</p>
        <input
          type="number"
          name="age"
          defaultValue={age}
          onChange={e => handleOnChange('age', e)}
        />
      </label>
      <Count />
    </fieldset>
  )
}
