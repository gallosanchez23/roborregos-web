import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import header from '../../../images/header.png'
import './HomeHeader.css'

const ReactRotatingText = require('react-rotating-text')

class HomeHeader extends Component {
  render() {
    return (
      <header className="home-header">
        <Row className="justify-content-sm-center">
          <Col className="header-img-col">
            <span>
              <img className="header-img" src={header} alt="logo" />
              <br />
              <br />
              <h1>
                We
                <ReactRotatingText
                  items={[' create', ' build', ' design', ' code', ' connect', ' compete', ' learn', ' teach']}
                  pause={2500}
                  typingInterval={70}
                  emptyPause={20}
                />
              </h1>
            </span>
          </Col>
        </Row>
      </header>
    )
  }
}

export default HomeHeader
