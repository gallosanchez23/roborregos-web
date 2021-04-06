// @flow
import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import CandidatesOpenPositions from './CandidatesOpenPositions/CandidatesOpenPositions'
import './Roles.css'

type Position = {
  id: string,
  title: string,
  shortDescription: string,
  path: string
};

type PositionsData = {
  positions: Array<Position>,
  url_facebook: string,
  url_form: string
};

type Props = {
  positionsData: PositionsData
};

class Roles extends Component<Props> {
  positionsData: PositionsData;

  constructor(props: Props) {
    super(props)
    this.positionsData = props.positionsData
  }

  joinUsCallback() {
    window.open(this.positionsData.url_facebook, '_blank')
  }

  render() {
    return (
      <div className="candidates-join-us">
        <Row>
          <Col className="candidates-join-us-title-container">
            <p> Roles </p>
          </Col>
        </Row>
        <CandidatesOpenPositions positionsData={this.positionsData} />
      </div>
    )
  }
}

export default Roles
