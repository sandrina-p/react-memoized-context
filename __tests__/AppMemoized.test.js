import AppMemoized from '../demo/AppMemoized'
import React from 'react'
import { mount } from 'enzyme'

function changeInput(tree, name, value) {
  tree
    .find(`input[name="${name}"]`)
    .props()
    .onChange({
      target: {
        value,
      },
    })
}

describe('when rendering initially', () => {
  let tree

  beforeAll(() => {
    tree = mount(<AppMemoized />)
  })

  it('should display the name Sandy in Greetings', () => {
    expect(tree.find('[data-testid="greetings"]').text()).toBe(
      'Hello Sandy! Renders: 1x'
    )
  })

  it('should display 55 years old in Future', () => {
    expect(tree.find('[data-testid="future"]').text()).toBe(
      'In 2050 you will be 55 years old.Renders: 1x'
    )
  })

  it('should keep 1x render in Form', () => {
    expect(tree.find('fieldset Count').text()).toBe('Renders: 1x')
  })
})

describe('when changing name input to Robert', () => {
  let tree

  beforeAll(() => {
    tree = mount(<AppMemoized />)

    changeInput(tree, 'name', 'Robert')
  })

  it('should display new name in Greetings with 2x renders', () => {
    expect(tree.find('[data-testid="greetings"]').text()).toBe(
      'Hello Robert! Renders: 2x'
    )
  })

  it('should keep 1x render in Future', () => {
    expect(tree.find('[data-testid="future"]').text()).toBe(
      'In 2050 you will be 55 years old.Renders: 1x'
    )
  })

  it('should keep 1x render in Form', () => {
    expect(tree.find('fieldset Count').text()).toBe('Renders: 1x')
  })
})

describe('when performing 3 changes in a row: name, age and name', () => {
  let tree

  beforeAll(() => {
    tree = mount(<AppMemoized />)

    changeInput(tree, 'name', 'Robert')
    changeInput(tree, 'age', 30)
    changeInput(tree, 'name', 'Cris')
  })

  it('should display last name in Greetings with 3 renders', () => {
    expect(tree.find('[data-testid="greetings"]').text()).toBe(
      'Hello Cris! Renders: 3x'
    )
  })

  it('should display 61 yo with 2x renders', () => {
    expect(tree.find('[data-testid="future"]').text()).toBe(
      'In 2050 you will be 61 years old.Renders: 2x'
    )
  })

  it('should keep 1x render in Form', () => {
    expect(tree.find('fieldset Count').text()).toBe('Renders: 1x')
  })
})

// Do the same for age
