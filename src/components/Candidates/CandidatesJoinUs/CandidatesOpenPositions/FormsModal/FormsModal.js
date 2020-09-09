import React, { Component } from 'react';
import { Form, FormGroup, Label,Col, Input,Row, Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import './FormsModal.css';
import emailjs from 'emailjs-com';

const service_id = 'juarezid_1234_4321_01';
const template_id = 'template_6owvhzc';
const user_id = 'user_exlhFGfiCpajm8iHQostc';

class FormsModal extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.createMail = this.createMail.bind(this);
  }

  createMail(){
    const mes = "Hola soy " + this.name.value + " estudiante de " + this.carrera.value + " de " + this.semester.value + " semestre. \n" + this.comments.value;
    return({
      message: mes, 
      from_name: this.name.value, 
      reply_to: this.matricualtionNumber.value + '@itesm.mx',
      puesto : this.props.selectedPosition.title,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.toggle();
    alert("Thanks for your interest " + this.name.value + "! \nCheck your Tec email");

    emailjs.send(service_id,template_id , this.createMail(), user_id)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });  
  }

  render() {

    const greeting = "Join us as " + this.props.selectedPosition.title + "!";

    return (
        <Modal id="candidates-join-modal" isOpen= {this.props.isOpen} toggle={this.props.toggle}>

          <ModalHeader toggle={this.props.toggleModal}> {greeting}</ModalHeader>
          <ModalBody>
            <Form onSubmit={ this.handleSubmit }>

            <Row> 
              <FormGroup className="col-md-6">
                <Label>Nombre</Label>
                <Input type="text" id="name" placeholder="Juanito"
                  innerRef={ (input) => { this.name = input } } />
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
                  <option value="9">9+</option>
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

    );
  }
}

export default FormsModal;
