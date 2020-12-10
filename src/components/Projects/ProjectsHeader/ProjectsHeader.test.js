// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ProjectsHeader from './ProjectsHeader'

let wrapper
configure({ adapter: new Adapter() })

beforeEach(() => {
  wrapper = shallow(
    <ProjectsHeader />,
  )
})

it('<ProjectsHeader> renders components correctly', () => {
  expect(wrapper.find('.container-legend').length).toBe(1)
  expect(wrapper.find('.container-legend').length).toBe(1)
  expect(wrapper.find('.main-text-projects').length).toBe(1)
  expect(wrapper.find('.projects-header-footer').length).toBe(1)
  expect(wrapper.find('.icon-btn').length).toBe(1)
})

it('<ProjectsHeader> scrolls when "Learn More" button is clicked', () => {
  global.scrollBy = jest.fn()
  wrapper.find('.icon-btn').simulate('click')
  expect(global.scrollBy).toHaveBeenCalledWith(0, global.innerHeight - 48 - global.scrollY)
})

// Snapshots
it('<ProjectsHeader> matches snapshot', () => {
  const tree = renderer.create(
    <ProjectsHeader />,
  ).toJSON()
  expect(tree).toMatchSnapshot('ProjectsHeaderView.test.js.snap')
})
