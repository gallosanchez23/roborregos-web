// @flow
import React, { Component } from 'react'
import './ProjectsContent.css'
import ProjectsCard from './ProjectsCard/ProjectsCard'
import ProjectsCarousel from './ProjectsCarousel/ProjectsCarousel'
import ProjectsOther from './ProjectsOther/ProjectsOther'
import { SMALL_WIDTH } from '../../../constants'

type Project = {
  title: string,
  description: string,
  image: string,
  wiki: string
};

type OtherProjects = {
  title: string,
  image: string,
  wiki: string,
  background: string,
  color: string
};

type Props = {
  main_projects: Array<Project>,
  carousels: Array<Array<Project>>,
  other_projects: Array<OtherProjects>
};

type State = {
  visible: Array<boolean>
};

/** Component class of Projects page. */
class ProjectsContent extends Component <Props, State> {
  main_projects: Array<Project>;

  carousels: Array<Array<Project>>;

  other_projects: Array<OtherProjects>;

  /**
   * Class constructor
   * @param {list} props: List of projects by types.
   */
  constructor(props: Props) {
    super(props)

    this.main_projects = props.main_projects
    this.carousels = props.carousels
    this.other_projects = props.other_projects
    this.state = {
      visible: [],
    }
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.updateView)
    window.addEventListener('scroll', this.makeAppear, true)
  }

  makeAppear = () => {
    this.setState({
      visible: this.updateVisibility(),
    })
  }

  listenScrollEvent = (card_index) => (window.innerHeight * (card_index) < window.scrollY)

  updateVisibility = () => {
    const visibility = []
    for (let x = 0; x < this.main_projects.length; x += 1) {
      visibility[x] = this.listenScrollEvent(x)
    }
    return visibility
  }

  viewSizeLarge = () => {
    if (window.innerWidth > SMALL_WIDTH) {
      return true
    }
    return false
  }

  /**
   * Renders Responsive view of Projects's body page.
   * @return {renderized_component} Heder, grid, join us section and footer.
   */
  render() {
    const { visible } = this.state
    return (
      <div className="projects-content">
        {
            this.main_projects.map((project, index) => {
              if (visible[index]) {
                return (
                  <div className="main-project-card-container">
                    <ProjectsCard
                      project={project}
                      index={index}
                      show_scrollers
                    />
                  </div>
                )
              }
              return (<div />)
            })
        }
        <ProjectsCarousel project_carousels={this.carousels} main_counter={this.main_projects.length} />
        <ProjectsOther projects={this.other_projects} />
      </div>
    )
  }
}

export default ProjectsContent
