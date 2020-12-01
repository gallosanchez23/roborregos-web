/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
// @flow
import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import './ProjectsCard.css'
import Fade from '@material-ui/core/Fade'
import Grow from '@material-ui/core/Grow'
import { SMALL_WIDTH } from '../../../../constants'

type Project = {
  title: string,
  description: string,
  image: string,
  wiki: string
};

type Props = {
  index: number,
  project: Project
};

type State = {
  large_view: boolean,
  visible: boolean
};

/** Component class of Projects' card. */
class ProjectsCard extends Component<Props, State> {
  project: Project;

  index: number;

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
    this.smallView = this.smallView.bind(this)
    this.listenScrollEvent = this.listenScrollEvent.bind(this)

    this.project = props.project
    this.index = props.index
    this.state = {
      large_view: this.viewSizeLarge(),
      visible: this.listenScrollEvent(),
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateView)
    window.addEventListener('scroll', this.makeAppear, true)
  }

  listenScrollEvent = () => (window.innerHeight * (this.index) < window.scrollY)

  makeAppear = () => {
    this.setState({
      visible: this.listenScrollEvent(),
    })
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

  joinUsCallback = (link: string) => {
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

  cardContent = () => (
    <Grow in {...{ timeout: 1500 }} style={{ transformOrigin: 'bottom' }}>
      <Col xs={7} className="card-info">
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
    </Grow>
  )

  largeView = () => {
    if (this.index % 2) {
      return (
        <Row className="projects-card">
          {this.cardContent()}
          {this.imageContent()}
        </Row>
      )
    }
    return (
      <Row
        className="projects-card"
        style={{ paddingLeft: '5vw' }}
      >
        {this.imageContent()}
        {this.cardContent()}
      </Row>
    )
  }

  smallView = () => (
    <div className="projects-card">
      <div className="title-text-card">
        <h2>
          {this.project.title}
        </h2>
      </div>
      <div className="card-image-container">
        <img className="card-image" src={this.tryRequire(`${this.project.image}.jpg`)} alt={this.project.title} />
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

  imageContent() {
    return (
      <Col xs={5}>
        <img src={this.tryRequire(`${this.project.image}.jpg`)} className="card-image" alt={this.project.title} />
      </Col>
    )
  }

  /**
 * Renders Responsive view of Projects's card.
 * @return {renderized_component} Heder banner with legend.
 */
  render() {
    const { large_view, visible } = this.state
    if (large_view) {
      if (visible) {
        return (
          <Fade in {...{ timeout: 2000 }}>
            {this.largeView()}
          </Fade>
        )
      }
      return null
    }
    return this.smallView()
  }
}

export default ProjectsCard
