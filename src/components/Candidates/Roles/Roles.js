// @flow
import React, { useState } from 'react'
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

const Roles = (props: Props) => {
  const [RolesState] = useState(props)
  return (
    <div className="candidates-join-us">
      <Row>
        <Col className="candidates-join-us-title-container">
          <p> Roles </p>
        </Col>
      </Row>
      <CandidatesOpenPositions positionsData={RolesState.positionsData} />
    </div>
  )
}

export default Roles
