// @flow
import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import OpenPositionCard from './OpenPositionCard/OpenPositionCard'
import './CandidatesOpenPositions.css'
import FormsModal from './FormsModal/FormsModal'

type Position = {
  id: string,
  title: string,
  shortDescription: string
};

type PositionsData = {
  positions: Array<Position>,
  url_facebook: string,
  url_form: string
};

type Props = {
  positionsData: PositionsData
};

class CandidatesOpenPostions extends Component<Props> {
  constructor(props: Props) {
    super(props)

    this.positions = props.positionsData.positions

    this.state = {
      isModalOpen: false,
      selectedPosition: '',
      trySubmit: false,
    }

    this.openModal = this.openModal.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit() {
    this.setState({
      trySubmit: true,
    })
  }

  toggleModal() {
    const { isModalOpen } = this.state
    this.setState({
      isModalOpen: !isModalOpen,
    })
  }

  openModal(pos: string) {
    const { isModalOpen } = this.state
    this.setState({
      selectedPosition: pos,
      isModalOpen: !isModalOpen,
      trySubmit: false,
    })
  }

  render() {
    const { isModalOpen, trySubmit, selectedPosition } = this.state
    return (
      <Row className="justify-content-center mt-4">
        <Col xs="10" sm="10" md="10" lg="10" xl="10">
          <Row>
            {this.positions.map((position) => (
              <OpenPositionCard position={position} onClick={this.openModal} />
            ))}
          </Row>
        </Col>
        <FormsModal
          onSubmit={this.onSubmit}
          selectedPosition={selectedPosition}
          isOpen={isModalOpen}
          toggle={this.toggleModal}
          trySubmit={trySubmit}
        />
      </Row>
    )
  }
}

export default CandidatesOpenPostions
