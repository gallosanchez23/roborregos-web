// @flow
import { getByTestId } from '@testing-library/react'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'

import MembersJoinUs from './MembersJoinUs'

let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  if (document.body != null) {
    document.body.appendChild(container)
  } else {
    expect(document.body).not.toEqual(null)
  }
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  if (container != null) {
    container.remove()
  } else {
    expect(container).not.toEqual(null)
  }
  container = null
})

it('Member´s Join Us section renders correctly', () => {
  act(() => {
    render(<MembersJoinUs />, container)
  })
  expect(getByTestId(container, 'members-join-us')).not.toEqual(null)
  expect(getByTestId(container, 'members-join-us-button')).not.toEqual(null)
  expect(getByTestId(container, 'members-join-us-button')).toHaveTextContent('Join the Team')
})

it('Matches snapshot', () => {
  const tree = renderer.create(<MembersJoinUs />).toJSON()
  expect(tree).toMatchSnapshot()
})
