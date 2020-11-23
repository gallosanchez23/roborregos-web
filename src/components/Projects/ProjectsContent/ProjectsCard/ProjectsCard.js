// @flow
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Container } from 'react-bootstrap'
import logo from '../../../../images/info_background_3.jpg'
import './ProjectsCard.css'
import { SMALL_WIDTH } from '../../../../constants'

type Props = {};

/** Component class of Projects' card. */
class ProjectsCard extends Component<Props> {
  /**
   * Class constructor
   * @param {list} props: List of projects data.
   */
  constructor(props: Props) {
    super(props)
    this.cardContent = this.cardContent.bind(this)
    this.imageContent = this.imageContent.bind(this)
    this.largeView = this.largeView.bind(this)
    this.viewSizeLarge = this.viewSizeLarge.bind(this)
    this.updateView = this.updateView.bind(this)
    this.smallView = this.smallView.bind(this)

    this.project = props.project
    this.index = props.index
    this.state = {
      large_view: this.viewSizeLarge(),
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateView)
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

  joinUsCallback = (link) => {
    window.open(link)
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

  smallView() {
    return (
      <div className="projects-card">
        <div className="title-text-card">
          <h2>
            {this.project.title}
          </h2>
        </div>
        <div className="card-image-container">
          <img className="card-image" src={this.tryRequire(`${this.project.image}.png`)} alt={this.project.title} />
        </div>
        <div className="main-text-projects-description">
          {this.project.description}
        </div>
        <div className="button-div">
          <button
            type="button"
            className="card-button-small"
            onClick={() => ((this.project.wiki !== '') ? this.joinUsCallback(this.project.wiki) : null)}
            variant="outline-primary"
          >
            {(this.project.wiki !== '') ? 'Learn more' : 'Coming soon'}
          </button>
        </div>
      </div>
    )
  }

  cardContent(size) {
    return (
      <Col xs={size} className="card-info">
        <h2 className="title-text-card">
          {this.project.title}
        </h2>
        <div className="main-text-projects">
          <p>
            {this.project.description}
          </p>
        </div>
        <button type="button" className="card-button" onClick={() => ((this.project.wiki !== '') ? this.joinUsCallback(this.project.wiki) : null)} variant="outline-primary">
          {(this.project.wiki !== '') ? 'Learn more' : 'Coming soon'}
        </button>
      </Col>
    )
  }

  imageContent(size) {
    return (
      <Col xs={size}>
        <img src={this.tryRequire(`${this.project.image}.png`)} className="card-image" alt={this.project.title} />
      </Col>
    )
  }

  largeView() {
    if (this.index % 2) {
      return (
        <Row className="projects-card">
          {this.cardContent(7)}
          {this.imageContent(5)}
        </Row>
      )
    }
    return (
      <Row
        className="projects-card"
        style={{ paddingLeft: '5vw' }}
      >
        {this.imageContent(5)}
        {this.cardContent(7)}
      </Row>
    )
  }

  /**
 * Renders Responsive view of Projects's card.
 * @return {renderized_component} Heder banner with legend.
 */
  render() {
    if (this.state.large_view) return this.largeView()
    return this.smallView()
  }
}

export default ProjectsCard
