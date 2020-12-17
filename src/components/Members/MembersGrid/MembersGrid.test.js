// @flow
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MembersGrid from './MembersGrid'
import { LARGE_WIDTH, MEDIUM_WIDTH, MOBILE_WIDTH } from '../../../constants'

// Mock data
const active = [
  {
    id: 1,
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
    subtitle: '',
  },
  {
    id: 3,
    name: 'Third',
    lastname: 'Member3',
    status: 'active',
    role: 'Sponsors and Logistics',
    class: '2020',
    semesters: '1',
    degree: 'LIN',
    description: 'Mock member #3.',
    github: 'https://github.com/3',
    github_user: 'git_username3',
    linkedin: 'https://www.linkedin.com/3',
    resume_link: '',
    tags: '',
    Email: 'mock3@gmail.com',
    subtitle: '',
  },
  {
    id: 5,
    name: 'Fifth',
    lastname: 'Member5',
    status: 'active',
    role: 'Control Systems',
    class: '2019',
    semesters: '5',
    degree: 'ITC',
    description: 'Mock member #5.',
    github: 'https://github.com/5',
    github_user: 'git_username5',
    linkedin: 'https://www.linkedin.com/5',
    resume_link: '',
    tags: '',
    Email: 'mock5@gmail.com',
    subtitle: '',
  },
]

const inactive = [
  {
    id: 2,
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
    subtitle: '',
  },
  {
    id: 3,
    name: 'Fourth',
    lastname: 'Member4',
    status: 'inactive',
    role: 'Electronics',
    class: '2018',
    semesters: '5',
    degree: 'IE',
    description: 'Mock member #4.',
    github: 'https://github.com/4',
    github_user: 'git_username4',
    linkedin: 'https://www.linkedin.com/4',
    resume_link: '',
    tags: '',
    Email: 'mock4@gmail.com',
    subtitle: '',
  },
  {
    id: 6,
    name: 'Sixth',
    lastname: 'Member6',
    status: 'inactive',
    role: 'Navigation',
    class: '2017',
    semesters: '10',
    degree: 'ISDr',
    description: 'Mock member #6.',
    github: 'https://github.com/6',
    github_user: 'git_username6',
    linkedin: 'https://www.linkedin.com/6',
    resume_link: '',
    tags: '',
    Email: 'mock6@gmail.com',
    subtitle: '',
  },
]

// const container = null
let wrapper
configure({ adapter: new Adapter() })

beforeEach(() => {
  wrapper = shallow(
    <MembersGrid active_members={active} inactive_members={inactive} />,
  )
})

it('<Members Grid> active member gets clicked and carousel shows them', () => {
  expect(wrapper.state('show_modal')).toEqual(false)
  wrapper.find(`#members-grid-tile-${active[0].id}`).simulate('click')
  expect(wrapper.state('show_modal')).toEqual(true)
  expect(wrapper.find('modal-container')).not.toEqual(null)
  expect(wrapper.find('member-carrousel-true')).not.toEqual(null)
  expect(wrapper.find(`member-modal-${active[0].id}`)).not.toEqual(null)
  expect(wrapper.state('member')).toEqual(active[0])
})

it('<Members Grid> inactive member gets clicked and carousel shows them', () => {
  expect(wrapper.state('show_modal')).toEqual(false)
  wrapper.find(`#members-grid-tile-${inactive[0].id}`).simulate('click')
  expect(wrapper.state('show_modal')).toEqual(true)
  expect(wrapper.find('modal-container')).not.toEqual(null)
  expect(wrapper.find('member-carrousel-true')).not.toEqual(null)
  expect(wrapper.find(`member-modal-${inactive[1].id}`)).not.toEqual(null)
  expect(wrapper.state('member')).toEqual(inactive[0])
})

describe('<Members Grid/> carrousel keys', () => {
  it('Show next active', () => {
    wrapper.find(`#members-grid-tile-${active[0].id}`).simulate('click')
    expect(wrapper.state('member')).toEqual(active[0])
    const event = new KeyboardEvent('keydown', { keyCode: 39 })
    document.dispatchEvent(event)
    expect(wrapper.state('member')).toEqual(active[1])
  })

  it('Show previous/last active', () => {
    wrapper.find(`#members-grid-tile-${active[0].id}`).simulate('click')
    expect(wrapper.state('member')).toEqual(active[0])
    const event = new KeyboardEvent('keydown', { keyCode: 37 })
    document.dispatchEvent(event)
    expect(wrapper.state('member')).toEqual(active[2])
  })

  it('Show next inactive', () => {
    wrapper.find(`#members-grid-tile-${inactive[0].id}`).simulate('click')
    expect(wrapper.state('member')).toEqual(inactive[0])
    const event = new KeyboardEvent('keydown', { keyCode: 39 })
    document.dispatchEvent(event)
    expect(wrapper.state('member')).toEqual(inactive[1])
  })

  it('Show previous/last inactive', () => {
    wrapper.find(`#members-grid-tile-${inactive[0].id}`).simulate('click')
    expect(wrapper.state('member')).toEqual(inactive[0])
    const event = new KeyboardEvent('keydown', { keyCode: 37 })
    document.dispatchEvent(event)
    expect(wrapper.state('member')).toEqual(inactive[2])
  })
})

// Snapshots

describe('Matches snapshot with:', () => {
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

  it('Large width', () => {
    const tree = renderer.create(
      <MembersGrid active_members={active} inactive_members={inactive} />,
    ).toJSON()
    act(() => {
      render(<MembersGrid active_members={active} inactive_members={inactive} />, container)
    })
    expect(tree).toMatchSnapshot('MembersGridLargeView.test.js.snap')
  })

  it('Medium width', () => {
    global.innerWidth = MEDIUM_WIDTH
    global.dispatchEvent(new Event('resize'))
    const tree = renderer.create(
      <MembersGrid active_members={active} inactive_members={inactive} />,
    ).toJSON()
    act(() => {
      render(<MembersGrid active_members={active} inactive_members={inactive} />, container)
    })
    expect(tree).toMatchSnapshot('MembersGridMediumView.test.js.snap')
  })

  it('Mobile width', () => {
    global.innerWidth = MOBILE_WIDTH
    global.dispatchEvent(new Event('resize'))
    const tree = renderer.create(
      <MembersGrid active_members={active} inactive_members={inactive} />,
    ).toJSON()
    act(() => {
      render(<MembersGrid active_members={active} inactive_members={inactive} />, container)
    })
    expect(tree).toMatchSnapshot('MembersGridMobileView.test.js.snap')
  })
})
