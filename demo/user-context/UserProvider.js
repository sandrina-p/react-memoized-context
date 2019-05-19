import React, { Component } from 'react'
import UserContext from './UserContext'

export default class UserProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Sandy',
      age: 24,
      updateUser: this.updateUser.bind(this),
    }
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }

  updateUser(attr, newValue) {
    this.setState({
      [attr]: newValue,
    })
  }
}

UserProvider.defaultProps = {
  value: {},
}
