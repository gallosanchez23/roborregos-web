// @flow
import { getByTestId, queryByTestId } from '@testing-library/react'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import MemberModal from './MemberModal'
import { LARGE_WIDTH, MEDIUM_WIDTH } from '../../../../constants'

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
  subtitle: '',
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
  global.innerWidth = LARGE_WIDTH
  global.dispatchEvent(new Event('resize'))
})

it('<Member Modal> has correct data (largeview)', () => {
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
  expect(queryByTestId(container, 'Resume')).toBeNull()
})

it('<Member Modal> has correct data (small view)', () => {
  act(() => {
    render(<MemberModal
      member={member}
      onHide={() => {}}
    />, container)
  })
  global.innerWidth = MEDIUM_WIDTH - 1
  global.dispatchEvent(new Event('resize'))
  expect(getByTestId(container, 'member-data')).not.toEqual(null)
  expect(getByTestId(container, 'member-data').textContent).toBe(member.description)
  expect(getByTestId(container, 'name-small')).not.toEqual(null)
  expect(getByTestId(container, 'name-small').textContent).toBe(`${member.name} ${member.lastname}`)
  expect(getByTestId(container, 'member-subtitles')).not.toEqual(null)
  expect(getByTestId(container, 'member-subtitles').textContent)
    .toBe(`Since ${member.class}, ${member.semesters} semesters`)
  expect(getByTestId(container, member.github_user)).not.toEqual(null)
  expect(getByTestId(container, member.github_user).textContent).toBe(member.github_user)
  expect(getByTestId(container, 'LinkedIn')).not.toEqual(null)
  expect(queryByTestId(container, 'Resume')).toBeNull()
})

it('<Member Modal> calls handleHideModal when close button is clicked', async () => {
  const mockCallBack = jest.fn()
  act(() => {
    render(<MemberModal
      member={member}
      onHide={mockCallBack}
    />, container)
  })
  getByTestId(container, 'closing-btn').click()
  expect(mockCallBack.mock.calls.length).toEqual(1)

  // small view
  global.innerWidth = MEDIUM_WIDTH - 1
  global.dispatchEvent(new Event('resize'))
  getByTestId(container, 'icon-small').click()
  expect(mockCallBack.mock.calls.length).toEqual(2)
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

it('Matches snapshot small view', () => {
  global.innerWidth = MEDIUM_WIDTH - 1
  global.dispatchEvent(new Event('resize'))
  const tree = renderer.create(
    <MemberModal
      member={member}
      onHide={() => {}}
    />,
  ).toJSON()
  expect(tree).toMatchSnapshot('MemberModalSmallView')
})
