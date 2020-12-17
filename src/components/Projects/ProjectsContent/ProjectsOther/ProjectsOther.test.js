// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ProjectsOther from './ProjectsOther'
import { LARGE_WIDTH, SMALL_WIDTH } from '../../../../constants'

let wrapper
configure({ adapter: new Adapter() })

const other = [
  {
    title: 'other_project1',
    wiki: 'https://github.com/1',
    image: 'other_project1',
    background: '#FFFFFF',
    color: 'black',
  },
  {
    title: 'other_project2',
    wiki: 'https://github.com/2',
    image: 'other_project2',
    background: '#FFFFFF',
    color: 'black',
  },
]

beforeEach(() => {
  wrapper = shallow(
    <ProjectsOther projects={other} />,
  )
})

it('<ProjectsOther> renders large view components correctly', () => {
  expect(wrapper.find('.projects-other').length).toBe(1)
  expect(wrapper.find('.title-text-other').length).toBe(1)
  expect(wrapper.find('.other-info').length).toBe(1)
  expect(wrapper.find('.description-other').length).toBe(1)
  expect(wrapper.find('.projects-other-grid').length).toBe(1)
  expect(wrapper.find('.other-project-image').length).toBe(2)
  expect(wrapper.find('.project-title').length).toBe(2)
  expect(wrapper.find('.project-grid-tile').length).toBe(2)
})

it('<ProjectsOther> renders small view components correctly', () => {
  global.innerWidth = SMALL_WIDTH
  global.dispatchEvent(new Event('resize'))
  expect(wrapper.find('.projects-other').length).toBe(1)
  expect(wrapper.find('.title-text-other').length).toBe(1)
  expect(wrapper.find('.other-info').length).toBe(1)
  expect(wrapper.find('.description-other').length).toBe(1)
  expect(wrapper.find('.other-project-image').length).toBe(2)
  expect(wrapper.find('.project-title').length).toBe(2)
  expect(wrapper.find('.other-projects-small').length).toBe(2)
})

it('<ProjectsOther> opens link when gridtile is clicked in large view', () => {
  global.innerWidth = LARGE_WIDTH
  global.dispatchEvent(new Event('resize'))
  global.open = jest.fn()
  wrapper.find(`#other-project-${other[1].image}`).simulate('click')
  expect(global.open).toHaveBeenCalledWith(other[1].wiki)
})

it('<ProjectsOther> opens link when image is clicked in small view', () => {
  global.innerWidth = SMALL_WIDTH
  global.dispatchEvent(new Event('resize'))
  global.open = jest.fn()
  wrapper.find(`#other-project-small-${other[1].image}`).simulate('click')
  expect(global.open).toHaveBeenCalledWith(other[1].wiki)
})

// Snapshots
describe('<ProjectsOther> matches snapshot with:', () => {
  it('Large width', () => {
    global.innerWidth = LARGE_WIDTH
    global.dispatchEvent(new Event('resize'))
    const tree = renderer.create(
      <ProjectsOther projects={other} />,
    ).toJSON()
    expect(tree).toMatchSnapshot('ProjectsOtherLargelView.test.js.snap')
  })

  it('Small width', () => {
    global.innerWidth = SMALL_WIDTH
    global.dispatchEvent(new Event('resize'))
    const tree = renderer.create(
      <ProjectsOther projects={other} />,
    ).toJSON()
    expect(tree).toMatchSnapshot('ProjectsOtherSmallView.test.js.snap')
  })
})
