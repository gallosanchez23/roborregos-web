import React, { Component } from 'react';
import { Form, FormGroup, Label,Col, Input,Row, Modal, ModalHeader, ModalBody, Button} from 'reactstrap';
import OpenPositionCard from './OpenPositionCard/OpenPositionCard';
import './CandidatesOpenPositions.css';
import emailjs from 'emailjs-com';

class CandidatesOpenPostions extends Component {
  constructor(props) {
    super(props);

    this.positions = props.positionsData.positions;

    this.state = {
      isModalOpen: false,
      selectedPosition: '',
    }

    this.openModal = this.openModal.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createMail = this.createMail.bind(this);
  }

  openModal(pos) {
    this.setState({
      selectedPosition: pos,
      isModalOpen: !this.state.isModalOpen,
    });
  }

  toggleModal(){
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  createMail(){
    const mes = "Hola soy " + this.name.value + " estudiante de " + this.carrera.value + " de " + this.semester.value + " semestre.\n" + this.comments.value;
    return({
      message: mes, 
      from_name: this.name.value, 
      reply_to: this.matricualtionNumber.value + '@itesm.mx',
      puesto : this.state.selectedPosition.title,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.toggleModal();
    console.log(this.name.value + " " + this.matricualtionNumber.value + " " + this.semester.value + " " + this.state.selectedPosition.title + " " + this.comments.value);
    alert("Thanks for your interest " + this.name.value + "! \nCheck your tec email");

    emailjs.send('juarezid_1234_4321_01', 'template_6owvhzc', this.createMail(), 'user_exlhFGfiCpajm8iHQostc')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });  
  }

  render() {

    const greeting = "Join us as " + this.state.selectedPosition.title + "!";

    return (
      <Row className='justify-content-center mt-4'>
        <Col xs='10' sm='10' md='10' lg='10' xl='10'>
          <Row>
            {this.positions.map(position => (<OpenPositionCard position={position} onClick={this.openModal} />))}
          </Row>
        </Col>

        <Modal id="candidates-join-modal" isOpen= {this.state.isModalOpen} toggle={this.toggleModal}>

          <ModalHeader toggle={this.toggleModal}> {greeting}</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>

            <Row> 
              <FormGroup className="col-md-6">
                <Label>Nombre</Label>
                <Input type="text" id="name" placeholder="Juanito"
                  innerRef={(input) => { this.name = input }} />
              </FormGroup>

              <FormGroup className="col-md-6">
                <Label>Matricula</Label>
                <Input type="text" id="matricualtionNumber" placeholder="A01283070"
                  innerRef={(input) => { this.matricualtionNumber = input }} />
              </FormGroup>

              <FormGroup className="col-md-6">
                <Label>Carrera</Label>
                <Input type="text" id="carrera" placeholder="IMT"
                  innerRef={(input) => { this.carrera = input }}>
                </Input>
              </FormGroup>

              <FormGroup className="col-md-6">
                <Label>Semestre</Label>
                <Input type="select" id="semester"
                  innerRef={(input) => { this.semester = input }}>
                  <option value=""></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </Input>
              </FormGroup>

              
              <FormGroup className="col-12">
                <Label>Cuéntanos sobre ti</Label>
                <Input type="textarea" id="comments" placeholder="¿Por qué quieres entrar al equipo?"
                  innerRef={(input) => { this.comments = input }}>
                </Input>
              </FormGroup>
              </Row>
              <Row className="mt-4 mb-1 justify-content-center">
                <Button className="mr-4 col-3 join" type="submit" value="submit">Join!</Button>
              </Row>
            </Form>

          </ModalBody>
        </Modal>

      </Row>
    );
  }
}

export default CandidatesOpenPostions;
