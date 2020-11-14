// @flow
import React, { Component } from 'react'
import './Projects.css'
import ProjectsHeader from './ProjectsHeader/ProjectsHeader'
import Footer from '../Footer/Footer'

/** Component class of Projects page. */
class Projects extends Component <Props> {
    projects: Array<projects>;

    /**
   * Class constructor
   * @param {list} props: List of projects data.
   */
    constructor(props: Props) {
      super(props)
      this.projects = props.projectsData
    }

    /**
   * Renders Responsive view of Projects's body page.
   * @return {renderized_component} Heder, grid, join us section and footer.
   */
    render() {
      document.title = 'RoBorregos | Projects'
      return (
        <div className="projects-container">
          <ProjectsHeader />
          <Footer />
        </div>
      )
    }
}

export default Projects
