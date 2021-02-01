// @flow
import { getByTestId } from '@testing-library/react'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'

import Members from './Members'

// Mock data
const membersData = {
  members: [
    {
      id: 1,
      name: 'First',
      lastname: 'Member1',
      status: 'active',
      role: 'Software Development',
      class: '2015',
      semesters: '8',
      subtitle: '',
      degree: 'ISD',
      description: 'Mock member #1.',
      github: 'https://github.com',
      github_user: 'git_username',
      linkedin: 'https://www.linkedin.com',
      resume_link: '',
      tags: '',
      Email: 'mock@gmail.com',
    },
  ],
}

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

it('<Members> Renders correctly with Title Name', () => {
  act(() => {
    render(<Members membersData={membersData} />, container)
  })
  expect(document.title).toBe('RoBorregos | Members')
})

it('Member´s components render correctly', () => {
  act(() => {
    render(<Members membersData={membersData} />, container)
  })
  expect(getByTestId(container, 'members-join-us')).not.toEqual(null)
  expect(getByTestId(container, 'members-grid-container')).not.toEqual(null)
})

it('Matches snapshot', () => {
  const tree = renderer.create(<Members membersData={membersData} />).toJSON()
  expect(tree).toMatchSnapshot()
})
