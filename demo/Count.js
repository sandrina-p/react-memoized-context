import React from 'react'

const style = {
  fontSize: '0.8rem',
  color: '#ed5b5b',
  margin: '0.2em 0 0',
  display: 'block',
}

export default class Count extends React.Component {
  constructor(props) {
    super(props)

    this.count = 1
  }

  render() {
    return <span style={style}>Renders: {this.count++}x</span>
  }
}
