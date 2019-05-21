import React from 'react'
import { mount, shallow } from 'enzyme'
import { UserContext, UserProvider } from '../demo/user-context'
import { withMemoizedContext } from '../src/'
import MemoContext from '../src/MemoContext'

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

describe('<MemoContext />', () => {
  it('should only re-render when updating the children or context[key]', () => {
    let count = 0
    const context = { a: 1, b: 2 }
    const memoKeys = ['a']

    const tree = mount(
      <MemoContext context={context} memoKeys={memoKeys}>
        {() => `Render: ${count++}`}
      </MemoContext>
    )

    expect(tree.text()).toBe('Render: 0')

    tree.setProps({
      context: { a: 2 },
    })

    // a changed, so it should re-render.
    expect(tree.text()).toBe('Render: 1')

    tree.setProps({
      context: { a: 2, b: 3 },
    })

    // b changed, but it's not part of memoKeys, so it should not re-render.
    expect(tree.text()).toBe('Render: 1')

    tree.setProps({
      children: () => `Render again: ${count++}`,
    })

    // children is different, so it should re-render:
    expect(tree.text()).toBe('Render again: 2')
  })
})
