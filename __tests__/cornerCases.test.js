import React from 'react'
import { mount } from 'enzyme'
import { UserContext, UserProvider } from '../demo/user-context'
import { withMemoizedContext } from '../src/'

describe('when using withMemoizedContext without memoKeys', () => {
  let tree
  const initialEnv = process.env.NODE_ENV

  beforeAll(() => {
    process.env.NODE_ENV = 'development'
    console.warning = jest.fn()

    const FooterNote = ({ context, intro }) => (
      <p>
        {intro} {context.name}.
      </p>
    )

    const FooterNoteConnectedTypo = withMemoizedContext(UserContext)(FooterNote)

    tree = mount(
      <UserProvider>
        <FooterNoteConnectedTypo intro="Made by" />
      </UserProvider>
    )
  })

  afterAll(() => {
    process.env.NODE_ENV = initialEnv
  })

  it('should throw a console.warning about it', () => {
    expect(console.warning).toHaveBeenCalledTimes(1)
    expect(console.warning).toHaveBeenCalledWith(
      'creact-memoized-context - withMemoizedContext - missing context memoKeys. You might have forgotten to pass them down at (FooterNote)'
    )
  })

  it('should render the component anyway', () => {
    expect(tree.text()).toBe('Made by .')
  })
})

describe('<MemoContext /> - when updating the children', () => {
  // make sure diffChildren (line 14) returns before reducing memoKeys.
  it.todo('should re-render the component correctly')
})
