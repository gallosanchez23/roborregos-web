// @flow
import React, { Component } from 'react'
import ReCAPTCHA from "react-google-recaptcha"
import {
  Form, FormGroup, Label, Input, Row, Modal, ModalHeader, ModalBody, Button,
} from 'reactstrap'
import sendJoinEmail from '../../../../../scripts/apiScripts'
import './FormsModal.css'

type SelectedPosition = {
  title: string
};

type Props = {
  selectedPosition: SelectedPosition,
  isOpen: boolean,
  toggle: () => void,
  onSubmit: () => void
};

type State = {
  isLoading: boolean,
};

class FormsModal extends Component<Props> {
  recaptchaRef: React.RefObject<HTMLElement> = React.createRef();

  name: HTMLInputElement;

  career: HTMLInputElement;

  semester: HTMLInputElement;

  matricualtionNumber: HTMLInputElement;

  comments: HTMLInputElement;

  constructor(props: Props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.createMail = this.createMail.bind(this)
    this.getError = this.getError.bind(this)

    this.state = {
      isLoading: false,
    }
  }

  handleSubmit = (recaptchaKey: string) => {
    const { onSubmit, toggle } = this.props
    onSubmit()
    if (this.name.value && this.career.value && this.semester.value
      && this.matricualtionNumber.value && this.comments.value) {
      const mailParams = this.createMail(recaptchaKey)
      this.setState({
        isLoading: true,
      })
      sendJoinEmail(mailParams).then((result) => {
        if (result.status === 1) {
          // eslint-disable-next-line no-alert
          alert('Thanks for your interest! \nCheck your Tec email \n')
        } else {
          // eslint-disable-next-line no-alert
          alert(`Something went wrong! \nEmail-Server Error, Retry Later`)
        }
      }, (error) => {
        // eslint-disable-next-line no-alert
        alert(`Something went wrong! \n${error.message}`)
      }).finally(() => {
        this.setState({
          isLoading: false,
        })
        toggle()
      })
    }
  }

  startLoading() {

  }

  handleReCaptcha = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const recaptchaRef = this.recaptchaRef.current;
    recaptchaRef.reset();
    recaptchaRef.execute();
  }

  getError = () => {
    const trySubmit = this.props
    if (trySubmit && this.name && this.career && this.semester
      && this.matricualtionNumber && this.comments
        && (!this.name.value || !this.career.value || !this.semester.value
        || !this.matricualtionNumber.value || !this.comments.value)) {
      return (
        <Row className="mt-4 mb-1 justify-content-center">
          <p className="text-danger"> Please fill out the entire forms</p>
        </Row>
      )
    }
    return null
  }

  createMail = (recaptchaKey: string) => {
    const emailBody = `Hola soy ${this.name.value}
      estudiante de ${this.career.value} de ${this.semester.value} semestre. \n
      ${this.comments.value}`
    const { selectedPosition } = this.props
    return ({
      message: emailBody,
      from_name: this.name.value,
      reply_to: `${this.matricualtionNumber.value}@itesm.mx`,
      position: selectedPosition.title,
      recaptchaKey: recaptchaKey,
    })
  }

  render() {
    const {
      selectedPosition, isOpen, toggle,
    } = this.props
    const greeting = `Join us as ${selectedPosition.title}!`

    return (
      <>
        <Modal id="candidates-join-modal" isOpen={isOpen} toggle={toggle} className="position-relative">
          <ModalHeader toggle={toggle}>
            {' '}
            { greeting }
          </ModalHeader>
          <ModalBody>
            <Form className={this.state.isLoading ? 'formLoading' : ''}>
              <Row>
                <FormGroup className="col-md-6">
                  <Label>Name</Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Juanito"
                    disabled={this.state.isLoading}
                    innerRef={(input) => { this.name = input }}
                  />
                </FormGroup>
                <FormGroup className="col-md-6">
                  <Label>Matriculation Number</Label>
                  <Input
                    type="text"
                    id="matricualtionNumber"
                    placeholder="A01283070"
                    disabled={this.state.isLoading}
                    innerRef={(input) => { this.matricualtionNumber = input }}
                  />
                </FormGroup>
                <FormGroup className="col-md-6">
                  <Label>Career</Label>
                  <Input
                    type="text"
                    id="career"
                    placeholder="IMT"
                    disabled={this.state.isLoading}
                    innerRef={(input) => { this.career = input }}
                  />
                </FormGroup>
                <FormGroup className="col-md-6">
                  <Label>Semester</Label>
                  <Input
                    type="select"
                    id="semester"
                    disabled={this.state.isLoading}
                    innerRef={(input) => { this.semester = input }}
                  >
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
                  <Input
                    type="textarea"
                    id="comments"
                    disabled={this.state.isLoading}
                    placeholder="Why you want to join the team?"
                    innerRef={(input) => { this.comments = input }}
                  />
                </FormGroup>
              </Row>
              <>
                {this.getError()}
                {' '}
              </>
              <Row className="mt-4 mb-1 justify-content-center">
                <Button className="mr-4 col-3 join" type="button" onClick={this.handleReCaptcha} disabled={this.state.isLoading}>Join!</Button>
              </Row>
            </Form>
            <div className={`loadingSymbol ${this.state.isLoading ? '' : 'd-none'}`}>
              <svg className="spinSymbol" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          </ModalBody>
        </Modal>
        <ReCAPTCHA
          ref={this.recaptchaRef}
          size="invisible"
          sitekey={process.env.REACT_APP_RECAPTCHA}
          className={isOpen ? '' : 'd-none'}
          onChange={this.handleSubmit}
        />,
      </>
    )
  }
}

export default FormsModal
