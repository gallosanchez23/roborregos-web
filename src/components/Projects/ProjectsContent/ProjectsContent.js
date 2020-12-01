// @flow
import React, { Component } from 'react'
import './ProjectsContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
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
  show_scrollers: boolean
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
      show_scrollers: this.viewSizeLarge(),
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateView)
  }

  scrollToInfo = (index: number) => {
    window.scrollBy(0, window.innerHeight * (index + 2) - (85 * (index + 1))
     - window.scrollY + 35 * (index))
  }

  updateView = () => {
    this.setState({
      show_scrollers: this.viewSizeLarge(),
    })
  }

  viewSizeLarge = () => {
    if (window.innerWidth > SMALL_WIDTH) {
      return true
    }
    return false
  }

  getScrollers = (index: number) => (
    <div className="icon-container">
      <FontAwesomeIcon
        onClick={() => this.scrollToInfo(index)}
        icon={faAngleDown}
        className="icon-btn"
      />
    </div>
  )

  /**
   * Renders Responsive view of Projects's body page.
   * @return {renderized_component} Heder, grid, join us section and footer.
   */
  render() {
    const { show_scrollers } = this.state
    return (
      <div className="projects-content">
        {
            this.main_projects.map((project, index) => (
              <div className="main-project-card-container">
                <ProjectsCard project={project} index={index} />
                {show_scrollers ? this.getScrollers(index) : null}
              </div>
            ))
        }
        <ProjectsCarousel project_carousels={this.carousels} main_counter={this.main_projects.length} />
        <ProjectsOther projects={this.other_projects} />
      </div>
    )
  }
}

export default ProjectsContent
