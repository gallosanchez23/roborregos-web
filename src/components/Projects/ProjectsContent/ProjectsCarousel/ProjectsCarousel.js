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
  project_carousels: Array<Array<Project>>,
  main_counter: number
};

/** Component class of Projects page. */
class ProjectsContent extends Component <Props> {
  project_carousels: Array<Array<Project>>;

  main_counter: number;

  /**
   * Class constructor
   * @param {list} props: List of projects data.
   */
  constructor(props: Props) {
    super(props)
    this.project_carousels = props.project_carousels
    this.main_counter = props.main_counter
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
            this.project_carousels.map((projects, carrousel_index) => (
              <Carousel
                className="project-carousel"
                navButtonsAlwaysVisible
                timeout={200}
                animation="slide"
                autoPlay={false}
                index={(((carrousel_index % 2) + (this.main_counter % 2))) % 2}
              >
                {projects.map((project, index) => (
                  <ProjectsCard
                    project={project}
                    index={index}
                    show_scrollers={false}
                  />
                ))}
              </Carousel>
            ))
        }
      </div>
    )
  }
}

export default ProjectsContent
