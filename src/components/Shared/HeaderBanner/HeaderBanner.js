// @flow
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import './HeaderBanner.css'

type Props = {
    title: string,
    mainText: Array<string>,
    subText: Array<string>
};

function HeaderBanner({ title, mainText, subText }: Props) {
  /**
  Function to scroll down the window view towards th end of the component.
  */
  const scrollToInfo = () => {
    window.scrollBy(0, window.innerHeight - 48 - window.scrollY)
  }

  /**
   * Function to parse array of strings into lines of text in jsx using <br/> tags.
   * @param {text} text: Array of strings, representing each line of text.
   */
  const parseText = (text) => text.map((textLine) => (
    <>
      { textLine }
      <br />
    </>
  ))

  return (
    <div className="projects-header">
      <div className="container-legend">
        <h2 className="title-text-banner">
          {title}
        </h2>
        <div className="main-text-projects">
          <p>
            { parseText(mainText) }
          </p>
        </div>
      </div>
      <div className="projects-header-footer">
        <p>
          { parseText(subText) }
        </p>
        <FontAwesomeIcon
          onClick={scrollToInfo}
          icon={faAngleDown}
          className="icon-btn"
        />
      </div>
    </div>
  )
}

export default HeaderBanner
