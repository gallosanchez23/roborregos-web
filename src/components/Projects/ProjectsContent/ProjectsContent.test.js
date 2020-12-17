// @flow
import React from 'react'
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ProjectsContent from './ProjectsContent'
import { SMALL_WIDTH, LARGE_WIDTH } from '../../../constants'
import ProjectsCard from './ProjectsCard/ProjectsCard'
import ProjectsCarousel from './ProjectsCarousel/ProjectsCarousel'
import ProjectsOther from './ProjectsOther/ProjectsOther'

const main = [
  {
    title: 'main-project-1',
    description: 'description-main-1',
    wiki: 'https://github.com/',
    image: 'main-project-1',
  },
  {
    title: 'main-project-2',
    description: 'description-main-2',
    wiki: 'https://github.com/',
    image: 'main-project-2',
  },
]

const carrousel = [
  [
    {
      title: 'carousel1-project-1',
      description: 'description-carousel1-1',
      wiki: 'https://github.com/carousel1',
      image: 'carousel1-project-1',
    },
  ],
  [
    {
      title: 'carousel2-project-1',
      description: 'description-carousel2-1',
      wiki: 'https://github.com/carousel2',
      image: 'carousel2-project-1',
    },
  ],
]

const other = [
  {
    title: 'other_project1',
    wiki: 'https://github.com/1',
    image: 'other_project1',
    background: '#FFFFFF',
    color: 'black',
  },
]

let wrapper
configure({ adapter: new Adapter() })

beforeEach(() => {
  wrapper = mount(
    <ProjectsContent main_projects={main} carousels={carrousel} other_projects={other} />,
  )
})

it('<ProjectsContent> renders components correctly', () => {
  wrapper = mount(
    <ProjectsContent main_projects={main} carousels={carrousel} other_projects={other} />,
  )
  expect(wrapper.find(ProjectsContent).length).toBe(1)
  expect(wrapper.find(ProjectsCarousel).length).toBe(1)
  expect(wrapper.find(ProjectsOther).length).toBe(1)
  global.dispatchEvent(new Event('scroll'))
  expect(wrapper.state('visible')).toEqual([false, false])
})

it('<ProjectsContent> renders main_projects after scroll', () => {
  global.scrollY = global.innerHeight * 3
  global.dispatchEvent(new Event('scroll'))
  expect(wrapper.find(ProjectsContent).length).toBe(1)
  expect(wrapper.find(ProjectsCarousel).length).toBe(1)
  expect(wrapper.find(ProjectsOther).length).toBe(1)
  expect(wrapper.find(ProjectsCard).length).toBe(2)
  expect(wrapper.state('visible')).toEqual([true, true])
})

// Snapshots
describe('<ProjectsContent> matches snapshot:', () => {
  beforeEach(() => {
    wrapper = shallow(
      <ProjectsContent main_projects={main} carousels={carrousel} other_projects={other} />,
    )
  })

  it('Large width', () => {
    global.innerWidth = LARGE_WIDTH
    global.dispatchEvent(new Event('resize'))
    expect(wrapper.debug()).toMatchSnapshot('ProjectsContentLargeView.test.js.snap')
  })

  it('Small width', () => {
    global.innerWidth = SMALL_WIDTH
    global.dispatchEvent(new Event('resize'))
    expect(wrapper).toMatchSnapshot('ProjectsContentSmallView.test.js.snap')
  })
})
