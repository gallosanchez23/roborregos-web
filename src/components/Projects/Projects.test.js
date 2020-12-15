// @flow
import React from 'react'
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ProjectsComponent from './Projects'
import ProjectsHeader from './ProjectsHeader/ProjectsHeader'
import ProjectsContent from './ProjectsContent/ProjectsContent'
import Footer from '../Footer/Footer'
import { LARGE_WIDTH, SMALL_WIDTH } from '../../constants'

// Mock data
const projectsData = {
  main:
            [
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
            ],
  carrousel:
        [
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
        ],
  other:
            [
              {
                title: 'other_project1',
                wiki: 'https://github.com/1',
                image: 'other_project1',
                background: '#FFFFFF',
                color: 'black',
              },
            ],
}

let wrapper
configure({ adapter: new Adapter() })

beforeEach(() => {
  wrapper = mount(
    <ProjectsComponent projectsData={projectsData} />,
  )
})

it('<Projects> render main components correctly', () => {
  expect(wrapper.find(ProjectsComponent).length).toBe(1)
  expect(wrapper.find(ProjectsHeader).length).toBe(1)
  expect(wrapper.find(ProjectsContent).length).toBe(1)
  expect(wrapper.find(Footer).length).toBe(1)
})

// Snapshots
describe('<Projects> matches snapshot with:', () => {
  it('Large width', () => {
    global.innerWidth = LARGE_WIDTH
    global.dispatchEvent(new Event('resize'))
    const wrapper_content = shallow(
      <ProjectsComponent projectsData={projectsData} />,
    ).debug()
    expect(wrapper_content).toMatchSnapshot('ProjectsLargeView.test.js.snap')
  })

  it('Small width', () => {
    global.innerWidth = SMALL_WIDTH
    global.dispatchEvent(new Event('resize'))
    const wrapper_content = shallow(
      <ProjectsComponent projectsData={projectsData} />,
    ).debug()
    expect(wrapper_content).toMatchSnapshot('ProjectsSmallView.test.js.snap')
  })
})
