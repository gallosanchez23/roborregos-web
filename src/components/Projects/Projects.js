// @flow
import React, { Component } from 'react'
import './Projects.css'
import ProjectsHeader from './ProjectsHeader/ProjectsHeader'
import ProjectsContent from './ProjectsContent/ProjectsContent'
import Footer from '../Footer/Footer'

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

type ProjectsData = {
  main: Array<Project>,
  carrousel: Array<Array<Project>>,
  other: Array<OtherProjects>
};

type Props = {
  projectsData: ProjectsData
};

/** Component class of Projects page. */
class Projects extends Component <Props> {
    projects: ProjectsData;

    /**
   * Class constructor
   * @param {list} props: List of projects data by type.
   */
    constructor(props: Props) {
      super(props)
      this.projects = props.projectsData
    }

    /**
   * Renders Responsive view of Projects's body page.
   * @return {renderized_component} Heder, Content, and footer.
   */
    render() {
      const { other, carrousel, main } = this.projects
      document.title = 'RoBorregos | Projects'
      return (
        <div className="projects-container">
          <ProjectsHeader />
          <ProjectsContent main_projects={main} carousels={carrousel} other_projects={other} />
          <Footer />
        </div>
      )
    }
}

export default Projects
