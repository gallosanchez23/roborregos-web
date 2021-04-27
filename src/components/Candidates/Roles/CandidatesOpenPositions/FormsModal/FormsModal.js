// @flow
import React from 'react'
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
  trySubmit: boolean,
  toggle: () => void,
  onSubmit: () => void
};

const FormsModal = (props: Props) => {
  let name = React.useRef<HTMLInputElement>(null)
  let career = React.useRef<HTMLInputElement>(null)
  let semester = React.useRef<HTMLInputElement>(null)
  let matricualtionNumber = React.useRef<HTMLInputElement>(null)
  let comments = React.useRef<HTMLInputElement>(null)

  const createMail = () => {
    const emailBody = `Hola soy ${name.value}
      estudiante de ${career.value} de ${semester.value} semestre. \n
      ${comments.value}`
    const { selectedPosition } = props
    return ({
      message: emailBody,
      from_name: name.value,
      reply_to: `${matricualtionNumber.value}@itesm.mx`,
      position: selectedPosition.title,
    })
  }

  const handleSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const { onSubmit, toggle } = props
    onSubmit()
    if (name.value && career.value && semester.value
      && matricualtionNumber.value && comments.value) {
      toggle()
      const mailParams = createMail()
      sendJoinEmail(mailParams).then((result) => {
        if (result.status === 200) {
          // eslint-disable-next-line no-alert
          alert('Thanks for your interest! \nCheck your Tec email \n')
        } else {
          throw new Error('Email-Server Error, Retry Later')
        }
      }, (error) => {
        // eslint-disable-next-line no-alert
        alert(`Something went wrong! \n${error.text}`)
      })
    }
  }

  const getError = () => {
    const { trySubmit } = props
    if (trySubmit && name && career && semester
      && matricualtionNumber && comments
        && (!name.value || !career.value || !semester.value
        || !matricualtionNumber.value || !comments.value)) {
      return (
        <Row className="mt-4 mb-1 justify-content-center">
          <p className="text-danger"> Please fill out the entire forms</p>
        </Row>
      )
    }
    return null
  }

  const { selectedPosition, isOpen, toggle } = props
  const greeting = `Join us as ${selectedPosition.title}!`

  return (
    <Modal id="candidates-join-modal" isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        {' '}
        { greeting }
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <Row>
            <FormGroup className="col-md-6">
              <Label>Name</Label>
              <Input
                type="text"
                id="name"
                placeholder="Juanito"
                innerRef={(input) => { name = input }}
              />
            </FormGroup>
            <FormGroup className="col-md-6">
              <Label>Matriculation Number</Label>
              <Input
                type="text"
                id="matricualtionNumber"
                placeholder="A01283070"
                innerRef={(input) => { matricualtionNumber = input }}
              />
            </FormGroup>
            <FormGroup className="col-md-6">
              <Label>Career</Label>
              <Input
                type="text"
                id="career"
                placeholder="IMT"
                innerRef={(input) => { career = input }}
              />
            </FormGroup>
            <FormGroup className="col-md-6">
              <Label>Semester</Label>
              <Input
                type="select"
                id="semester"
                innerRef={(input) => { semester = input }}
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
                placeholder="Why you want to join the team?"
                innerRef={(input) => { comments = input }}
              />
            </FormGroup>
          </Row>
          <>
            {getError()}
            {' '}
          </>
          <Row className="mt-4 mb-1 justify-content-center">
            <Button className="mr-4 col-3 join" type="submit" value="submit">Join!</Button>
          </Row>
        </Form>
      </ModalBody>
    </Modal>
  )
}

export default FormsModal
