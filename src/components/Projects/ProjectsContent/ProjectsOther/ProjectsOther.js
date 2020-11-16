// @flow
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import './ProjectsOther.css'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import { Row, Col, Container } from 'react-bootstrap'
import robosearch from '../robosearch.png'

type Props = {};

/** Component class of Projects' header. */
class ProjectsOther extends Component<Props> {
  /**
   * Class constructor
   * @param {list} props: List of projects data.
   */
  constructor(props: Props) {
    super(props)
    this.projects = props.projects
  }

  joinUsCallback = (link) => {
    window.open(link)
  }

  /**
 * Renders Responsive view of Projects's header.
 * @return {renderized_component} Heder banner with legend.
 */
  render() {
    return (
      <div className="projects-other">
        <Row>
          <div className="other-info">
            <h2 className="title-text-other">
              Other projects
            </h2>
            <div className="description-other">
              <p>
                Check out other interesting tech projects developed by the community!
              </p>
            </div>
          </div>
        </Row>
        <Row>
          <div className="projects-other-grid">
            <GridList
              cellHeight="auto"
              cols={3}
              spacing={5}
            >
              {this.projects.map((project, index) => (
                <GridListTile
                  key={index}
                  cols={1}
                  className="project-grid-tile"
                  onClick={() => this.joinUsCallback(project.wiki)}
                >
                  <div>
                    <img
                      className="other-project-image"
                      src={robosearch}
                      alt={project.title}
                    />
                  </div>
                  <div className="project-title">
                    <p>
                      {project.title}
                    </p>
                  </div>
                </GridListTile>
              ))}
            </GridList>
          </div>
        </Row>
      </div>
    )
  }
}

export default ProjectsOther
