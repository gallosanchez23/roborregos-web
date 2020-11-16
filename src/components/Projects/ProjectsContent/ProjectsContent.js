// @flow
import React, { Component } from 'react'
import ProjectsCard from './ProjectsCard/ProjectsCard'
import './ProjectsContent.css'

/** Component class of Projects page. */
class ProjectsContent extends Component <Props> {
  /**
   * Class constructor
   * @param {list} props: List of projects data.
   */
  constructor(props: Props) {
    super(props)
    this.main_projects = props.main_projects
    this.carousels = props.carousels
    this.other_projects = props.other
  }

  /**
   * Renders Responsive view of Projects's body page.
   * @return {renderized_component} Heder, grid, join us section and footer.
   */
  render() {
    return (
      <div>
        <ProjectsCard projects={this.main_projects} />
      </div>
    )
  }
}

export default ProjectsContent
