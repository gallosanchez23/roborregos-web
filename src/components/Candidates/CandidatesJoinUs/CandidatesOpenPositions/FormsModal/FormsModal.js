import React, { Component } from 'react';
import { Form, FormGroup, Label, Input,Row, Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import './FormsModal.css';
import emailjs from 'emailjs-com';

const ServiceId = 'juarezid_1234_4321_01';
const TemplateId = 'template_6owvhzc';
const UserId = 'user_exlhFGfiCpajm8iHQostc';

class FormsModal extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.createMail = this.createMail.bind(this);
  }

  createMail(){
    const emailBody = "Hola soy " + this.name.value + " estudiante de " + this.career.value + " de " + this.semester.value + " semestre. \n" + this.comments.value;
    return({
      message: emailBody, 
      from_name: this.name.value, 
      reply_to: this.matricualtionNumber.value + '@itesm.mx',
      position : this.props.selectedPosition.title,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.toggle();
    const mailParams = this.createMail();
    emailjs.send(ServiceId, TemplateId, mailParams, UserId)
    .then((result) => {
        alert(result.text + " \n Thanks for your interest! \nCheck your Tec email \n");
    }, (error) => {
        alert("Something went wrong! \n" + error.text);
    });  
  }

  render() {
    const greeting = `Join us as ${this.props.selectedPosition.title}!`;

    return (
        <Modal id="candidates-join-modal" isOpen= { this.props.isOpen } toggle={ this.props.toggle }>
          <ModalHeader toggle={ this.props.toggleModal }> { greeting }</ModalHeader>
          <ModalBody>
            <Form onSubmit={ this.handleSubmit }>
            <Row> 
              <FormGroup className="col-md-6">
                <Label>Name</Label>
                <Input type="text" id="name" placeholder="Juanito"
                  innerRef={ (input) => { this.name = input } } />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Label>Matriculation Number</Label>
                <Input type="text" id="matricualtionNumber" placeholder="A01283070"
                  innerRef={ (input) => { this.matricualtionNumber = input } } />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Label>Career</Label>
                <Input type="text" id="career" placeholder="IMT"
                  innerRef={ (input) => { this.career = input } }>
                </Input>
              </FormGroup>
              <FormGroup className="col-md-6">
                <Label>Semester</Label>
                <Input type="select" id="semester"
                  innerRef={ (input) => { this.semester = input } }>
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
                <Label>Tell us about you</Label>
                <Input type="textarea" id="comments" placeholder="Why you want to join the team?"
                  innerRef={ (input) => { this.comments = input } }>
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
