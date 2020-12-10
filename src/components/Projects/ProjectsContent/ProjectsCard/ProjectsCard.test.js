// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ProjectsCard from './ProjectsCard'
import { SMALL_WIDTH, LARGE_WIDTH } from '../../../../constants'

const project = {
  title: 'project-1',
  description: 'description-1',
  wiki: 'https://github.com/1',
  image: 'project-1',
}

const project_in_progress = {
  title: 'project-1',
  description: 'description-1',
  wiki: '',
  image: 'project-1',
}

const index = 0

let wrapper
configure({ adapter: new Adapter() })

beforeEach(() => {
  global.innerWidth = LARGE_WIDTH
  global.dispatchEvent(new Event('resize'))
  wrapper = shallow(
    <ProjectsCard project={project} index={index} show_scrollers={false} />,
  )
})

it('<ProjectCard> large view renders components correctly', () => {
  expect(wrapper.find('.projects-card').length).toBe(1)
  expect(wrapper.find('.card-info').length).toBe(1)
  expect(wrapper.find('.title-text-card').length).toBe(1)
  expect(wrapper.find('.main-text-projects').length).toBe(1)
  expect(wrapper.find('.card-image').length).toBe(1)
  expect(wrapper.find('.card-button').length).toBe(1)
  const button_text = wrapper.find('.card-button').text()
  expect(button_text).toEqual('Learn more')
})

it('<ProjectCard> small view renders components correctly', () => {
  global.innerWidth = SMALL_WIDTH
  global.dispatchEvent(new Event('resize'))
  expect(wrapper.find('.projects-card').length).toBe(1)
  expect(wrapper.find('.title-text-card').length).toBe(1)
  expect(wrapper.find('.card-image-container').length).toBe(1)
  expect(wrapper.find('.main-text-projects-description').length).toBe(1)
  expect(wrapper.find('.button-div').length).toBe(1)
  expect(wrapper.find('.card-button-small').length).toBe(1)
  expect(wrapper.find('.card-button-small').text()).toEqual('Learn more')
})

it('<ProjectCard> renders button text correctly if given a project in progress (no wiki)', () => {
  wrapper = shallow(
    <ProjectsCard project={project_in_progress} index={index} show_scrollers={false} />,
  )
  expect(wrapper.find('.card-button').text()).toEqual('Coming soon')
})

it('<ProjectCard> opens link when button is clicked in large view', () => {
  global.innerWidth = LARGE_WIDTH
  global.dispatchEvent(new Event('resize'))
  global.open = jest.fn()
  wrapper.find('.card-button').simulate('click')
  expect(global.open).toHaveBeenCalledWith(project.wiki)
})

it('<ProjectCard> opens link when button is clicked in small view', () => {
  global.innerWidth = SMALL_WIDTH
  global.dispatchEvent(new Event('resize'))
  global.open = jest.fn()
  wrapper.find('.card-button-small').simulate('click')
  expect(global.open).toHaveBeenCalledWith(project.wiki)
})

it('<ProjectCard> renders scroller in large view if flagged as prop', () => {
  wrapper = shallow(
    <ProjectsCard project={project_in_progress} index={index} show_scrollers />,
  )
  expect(wrapper.find('.icon-container').length).toBe(1)
})

it('<ProjectCard> calls scrollTo when blue arrow is clicked in large view', () => {
  global.innerWidth = LARGE_WIDTH
  global.dispatchEvent(new Event('resize'))
  wrapper = shallow(
    <ProjectsCard project={project_in_progress} index={index} show_scrollers />,
  )
  global.scrollBy = jest.fn()
  wrapper.find('.icon-btn').simulate('click')
  expect(global.scrollBy).toHaveBeenCalledWith(
    0, window.innerHeight * (index + 2) - (85 * (index + 1))
  - window.scrollY + 35 * index,
  )
})

// Snapshots
describe('<ProjectCard> matches snapshot:', () => {
  it('Large width', () => {
    global.innerWidth = LARGE_WIDTH
    global.dispatchEvent(new Event('resize'))
    const wrapper_content = mount(
      <ProjectsCard project={project} index={0} show_scrollers={false} />,
    ).debug()
    expect(wrapper_content).toMatchSnapshot('ProjectCardLargeView.test.js.snap')
  })

  it('Small width', () => {
    global.innerWidth = SMALL_WIDTH
    global.dispatchEvent(new Event('resize'))
    const tree = renderer.create(
      <ProjectsCard project={project} index={0} show_scrollers={false} />,
    ).toJSON()
    expect(tree).toMatchSnapshot('ProjectCardSmallView.test.js.snap')
  })
})
