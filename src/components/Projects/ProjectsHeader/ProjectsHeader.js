// @flow
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import './ProjectsHeader.css'

type Props = {};

/** Component class of Projects' header. */
class ProjectsHeader extends Component<Props> {
  /**
 Function to scroll down the window view towards th end of the component.
 */
  scrollToInfo = () => {
    window.scrollBy(0, window.innerHeight - 48 - window.scrollY)
  }

  /**
 * Renders Responsive view of Projects's header.
 * @return {renderized_component} Heder banner with legend.
 */
  render() {
    return (
      <div className="projects-header">
        <div className="container-legend">
          <h2 className="title-text-banner">
            Projects
          </h2>
          <div className="main-text-projects">
            <p>
              Every year we challenge ourselves to keep learning and improve.
              See what we&apos;ve been up to!
            </p>
          </div>
        </div>
        <div className="projects-header-footer">
          <p>
            Scroll down and meet the us!
          </p>
          <FontAwesomeIcon
            onClick={this.scrollToInfo}
            icon={faAngleDown}
            className="icon-btn"
          />
        </div>
      </div>
    )
  }
}

export default ProjectsHeader
