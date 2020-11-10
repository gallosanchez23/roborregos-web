// @flow
import { getByTestId } from '@testing-library/react'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'

import MembersGrid from './MembersGrid'

// Mock data
const active = [
  {
    id: '1',
    name: 'First',
    lastname: 'Member1',
    status: 'active',
    role: 'Software Development',
    class: '2015',
    semesters: '8',
    degree: 'ISD',
    description: 'Mock member #1.',
    github: 'https://github.com/1',
    github_user: 'git_username1',
    linkedin: 'https://www.linkedin.com/1',
    resume_link: '',
    tags: '',
    Email: 'mock1@gmail.com',
  },
]

const inactive = [
  {
    id: '2',
    name: 'Second',
    lastname: 'Member1',
    status: 'inactive',
    role: 'Mechanical Design',
    class: '2015',
    semesters: '3',
    degree: 'IMT',
    description: 'Mock member #2.',
    github: 'https://github.com',
    github_user: 'git_username2',
    linkedin: 'https://www.linkedin.com/2',
    resume_link: '',
    tags: '',
    Email: 'mock2@gmail.com',
  },
]

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

it('<Members Grid> Renders correctly (Default)', () => {
  act(() => {
    render(<MembersGrid active_members={active} inactive_members={inactive} />, container)
  })
  expect(getByTestId(container, 'members-grid-container')).not.toEqual(null)
  //   expect(getByTestId(container, 'modal-container')).not.toEqual(null)
  //   expect(getByTestId(container, 'member-carrousel-1')).not.toEqual(null)
  expect(getByTestId(container, 'member-modal-1')).not.toEqual(null)
  expect(getByTestId(container, 'members-grid-active')).not.toEqual(null)
  expect(getByTestId(container, 'members-grid-inactive')).not.toEqual(null)
})

// it('<Members Grid> active member gets clicked and shows carousel', () => {
//   act(() => {
//     render(<MembersGrid active_members={active} inactive_members={inactive} />, container)
//   })
//   getByTestId(container, 'members-grid-tile-1').click()
//   expect(getByTestId(container, 'member-carrousel')).not.toEqual(null)
//   expect(getByTestId(container, 'member-carrousel-1')).hidden.toBe(false)
// })

// it('<Members Grid> inactive member gets clicked and shows carousel', () => {
//   act(() => {
//     render(<MembersGrid active_members={active} inactive_members={inactive} />, container)
//   })
//   getByTestId(container, 'members-grid-tile-2').click()
//   expect(getByTestId(container, 'member-carrousel')).not.toEqual(null)
//   expect(getByTestId(container, 'member-carrousel-0')).hidden.toBe(false)
// })
