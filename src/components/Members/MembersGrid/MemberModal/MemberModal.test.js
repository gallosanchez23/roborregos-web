// @flow
import { getByTestId } from '@testing-library/react'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import MemberModal from './MemberModal'
// Mock data
const member = {
  id: 1,
  name: 'First',
  lastname: 'Member1',
  status: 'inactive',
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

it('<Member Modal> Renders correctly (large view)', () => {
  act(() => {
    render(<MemberModal
      member={member}
      onHide={() => {}}
    />, container)
  })
  expect(getByTestId(container, 'member-modal-container')).not.toEqual(null)
  expect(getByTestId(container, 'information-container')).not.toEqual(null)
  expect(getByTestId(container, 'member-data')).not.toEqual(null)
})

// it('<Member Modal> Closes', () => {
//   act(() => {
//     render(<MemberModal
//       member={members[0]}
//       onHide={this.handleHideModal}
//     />, container)
//   })
//   expect(getByTestId(container, 'member-modal-container')).not.toEqual(null)
//   expect(getByTestId(container, 'information-container')).not.toEqual(null)
//   expect(getByTestId(container, 'member-data')).not.toEqual(null)
// })

it('<Member Modal> has correct data', () => {
  act(() => {
    render(<MemberModal
      member={member}
      onHide={() => {}}
    />, container)
  })
  expect(getByTestId(container, 'member-data')).not.toEqual(null)
  expect(getByTestId(container, 'member-data').textContent).toBe(member.description)
  expect(getByTestId(container, 'member-fullName')).not.toEqual(null)
  expect(getByTestId(container, 'member-fullName').textContent).toBe(`${member.name} ${member.lastname}`)
  expect(getByTestId(container, 'member-subtitles')).not.toEqual(null)
  expect(getByTestId(container, 'member-subtitles').textContent)
    .toBe(`Since ${member.class}, ${member.semesters} semesters`)
  expect(getByTestId(container, member.github_user)).not.toEqual(null)
  expect(getByTestId(container, member.github_user).textContent).toBe(member.github_user)
  expect(getByTestId(container, 'LinkedIn')).not.toEqual(null)
//   expect(getByTestId(container, 'LinkedIn').textContent).toBe(member.LinkedIn)
//   expect(getByTestId(container, 'Resume')).toEqual(null)
})

it('Matches snapshot large view', () => {
  const tree = renderer.create(
    <MemberModal
      member={member}
      onHide={() => {}}
    />,
  ).toJSON()
  expect(tree).toMatchSnapshot('MemberModalLargeView')
})
