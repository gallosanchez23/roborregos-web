import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import OpenPositionCard from './OpenPositionCard/OpenPositionCard';
import './CandidatesOpenPositions.css';
import FormsModal from './FormsModal/FormsModal';

class CandidatesOpenPostions extends Component {
  constructor(props) {
    super(props);

    this.positions = props.positionsData.positions;

    this.state = {
      isModalOpen: false,
      selectedPosition: '',
      trySubmit : false
    }

    this.openModal = this.openModal.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  openModal(pos) {
    this.setState({
      selectedPosition: pos,
      isModalOpen: !this.state.isModalOpen,
      trySubmit : false
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  onSubmit() {
    this.setState({
      trySubmit : true
    });
  }

  render() {
    return (
      <Row className='justify-content-center mt-4'>
        <Col xs='10' sm='10' md='10' lg='10' xl='10'>
          <Row>
            {this.positions.map(position => (<OpenPositionCard position={position} onClick={this.openModal} />))}
          </Row>
        </Col>
        <FormsModal onSubmit = {this.onSubmit} selectedPosition={this.state.selectedPosition} isOpen={this.state.isModalOpen} toggle={this.toggleModal} trySubmit = {this.state.trySubmit}/>
      </Row>
    );
  }
}

export default CandidatesOpenPostions;
