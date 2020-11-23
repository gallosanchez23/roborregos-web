// @flow
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import './ProjectsOther.css'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import { Row, Col, Container } from 'react-bootstrap'
import { hexToRgb } from '@material-ui/core'
import robosearch from '../robosearch.png'
import { SMALL_WIDTH } from '../../../../constants'

type Props = {};

/** Component class of Projects' header. */
class ProjectsOther extends Component<Props> {
  /**
   * Class constructor
   * @param {list} props: List of projects data.
   */
  constructor(props: Props) {
    super(props)
    this.largeView = this.largeView.bind(this)
    this.viewSizeLarge = this.viewSizeLarge.bind(this)
    this.updateView = this.updateView.bind(this)
    this.smallView = this.smallView.bind(this)

    this.projects = props.projects
    this.state = {
      large_view: this.viewSizeLarge(),
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateView)
  }

  joinUsCallback = (link) => {
    window.open(link)
  }

  updateView = () => {
    this.setState({
      large_view: this.viewSizeLarge(),
    })
  }

  viewSizeLarge = () => {
    if (window.innerWidth > SMALL_WIDTH) {
      return true
    }
    return false
  }

  /**
  * Parses path to projects image
  * @param {string} imgPath: Path to project's image/photo.
  * @return {path}
  */
  tryRequire = (imgPath: string) => {
    try {
      return require(`images/projects/${imgPath}`)
    } catch (err) {
      return null
    }
  }

  generateSmallCard = (project, index) => {
    if (index % 2) {
      return (
        <div
          className="other-projects-small"
          style={{ backgroundColor: project.background }}
          onClick={() => this.joinUsCallback(project.wiki)}
        >
          <Row>
            <Col xs={5}>
              <div className="project-title" style={{ color: project.color }}>
                <p>
                  {project.title}
                </p>
              </div>
            </Col>
            <Col xs={7}>
              <img
                className="other-project-image"
                src={this.tryRequire(`${project.image}.png`)}
                alt={project.title}
              />
            </Col>
          </Row>
        </div>
      )
    }
    return (
      <div
        className="other-projects-small"
        style={{ backgroundColor: project.background }}
        onClick={() => this.joinUsCallback(project.wiki)}
      >
        <Row>
          <Col xs={7}>
            <img
              className="other-project-image"
              src={this.tryRequire(`${project.image}.png`)}
              alt={project.title}
            />
          </Col>
          <Col xs={5}>
            <div className="project-title" style={{ color: project.color }}>
              <p>
                {project.title}
              </p>
            </div>
          </Col>
        </Row>
      </div>
    )
  }

  largeView() {
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
              spacing={3}
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
                      src={this.tryRequire(`${project.image}.png`)}
                      alt={project.title}
                      style={{ backgroundColor: project.background }}
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

  smallView() {
    return (
      <div className="projects-other">
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
        <div>
          {this.projects.map((project, index) => this.generateSmallCard(project, index))}
        </div>
      </div>
    )
  }

  /**
 * Renders Responsive view of Projects's header.
 * @return {renderized_component} Heder banner with legend.
 */
  render() {
    if (this.state.large_view) return this.largeView()
    return this.smallView()
  }
}

export default ProjectsOther
