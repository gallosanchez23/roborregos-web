// @flow
import React, { Component } from 'react'
import Carousel from 'react-material-ui-carousel'
import ProjectsCard from '../ProjectsCard/ProjectsCard'
import './ProjectsCarousel.css'

type Project = {
  title: string,
  description: string,
  image: string,
  wiki: string
};

type Props = {
  project_carousels: Array<Array<Project>>
};

/** Component class of Projects page. */
class ProjectsContent extends Component <Props> {
  project_carousels: Array<Array<Project>>;

  /**
   * Class constructor
   * @param {list} props: List of projects data.
   */
  constructor(props: Props) {
    super(props)
    this.project_carousels = props.project_carousels
  }

  joinUsCallback = (link: string) => {
    window.open(link)
  }

  /**
   * Renders Responsive view of Projects's carousels.
   * @return {renderized_component} Carrousels with project cards on them.
   */
  render() {
    return (
      <div className="project-carousels">
        {
            this.project_carousels.map((projects) => (
              <Carousel
                className="project-carousel"
                navButtonsAlwaysVisible
                timeout={200}
                animation="slide"
                autoPlay={false}
              >
                {projects.map((project, index) => <ProjectsCard project={project} index={index} />)}
              </Carousel>
            ))
        }
      </div>
    )
  }
}

export default ProjectsContent
