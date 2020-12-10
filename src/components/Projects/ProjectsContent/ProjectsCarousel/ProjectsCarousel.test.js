// @flow
import React from 'react'
import { shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ProjectsCarousel from './ProjectsCarousel'
import { LARGE_WIDTH, SMALL_WIDTH } from '../../../../constants'

let wrapper
configure({ adapter: new Adapter() })

const carousels = [
  [
    {
      title: 'main-project-1',
      description: 'description-main-1',
      wiki: 'https://github.com/1',
      image: 'main-project-1',
    },
    {
      title: 'main-project-2',
      description: 'description-main-2',
      wiki: 'https://github.com/2',
      image: 'main-project-2',
    },
  ],
  [
    {
      title: 'main-project-3',
      description: 'description-main-3',
      wiki: 'https://github.com/3',
      image: 'main-project-3',
    },
    {
      title: 'main-project-4',
      description: 'description-main-4',
      wiki: 'https://github.com/4',
      image: 'main-project-4',
    },
  ],
]

const main_projects_length = 3

beforeEach(() => {
  wrapper = shallow(
    <ProjectsCarousel project_carousels={carousels} main_counter={main_projects_length} />,
  )
})

it('<ProjectsCarousel> renders large view components correctly', () => {
  expect(wrapper.find('.project-carousels').length).toBe(1)
  expect(wrapper.find('.project-carousel').length).toBe(2)
})

// Snapshots
describe('<ProjectsCarousel> matches snapshot with:', () => {
  it('Large width', () => {
    global.innerWidth = LARGE_WIDTH
    global.dispatchEvent(new Event('resize'))
    const wrapper_content = mount(
      <ProjectsCarousel project_carousels={carousels} main_counter={main_projects_length} />,
    ).debug()
    expect(wrapper_content).toMatchSnapshot('ProjectsCarouselLargeView.test.js.snap')
  })

  it('Small width', () => {
    global.innerWidth = SMALL_WIDTH
    global.dispatchEvent(new Event('resize'))
    const wrapper_content = mount(
      <ProjectsCarousel project_carousels={carousels} main_counter={main_projects_length} />,
    ).debug()
    expect(wrapper_content).toMatchSnapshot('ProjectsCarouselSmallView.test.js.snap')
  })
})
