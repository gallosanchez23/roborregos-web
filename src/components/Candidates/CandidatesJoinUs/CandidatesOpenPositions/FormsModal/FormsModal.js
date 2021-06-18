// @flow
import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import {
  Form, FormGroup, Label, Input, Row, Modal, ModalHeader, ModalBody, Button,
} from 'reactstrap'
import { sendJoinUsEmail } from '../../../../../scripts/apiScripts'
import './FormsModal.css'
import FormsSnackBar from '../../../../Shared/FormsSnackBar/FormsSnackbar'

type SelectedPosition = {
  title: string
};

type Props = {
  selectedPosition: SelectedPosition,
  isOpen: boolean,
  toggle: () => void,
  onSubmit: () => void,
  trySubmit: boolean
};

function FormsModal(props: Props) {
  const {
    selectedPosition, isOpen, toggle, onSubmit, trySubmit,
  } = props
  const recaptchaRef: React.RefObject<HTMLElement> = React.createRef()
  const greeting = `Join us as ${selectedPosition.title}!`

  const [name, setName] = useState(null)
  const [career, setCareer] = useState(null)
  const [semester, setSemester] = useState(null)
  const [matricualtionNumber, setMatricualtionNumber] = useState(null)
  const [comments, setComments] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('Thanks for your interest! Check your Tec email.')
  const [severity, setSeverity] = useState('success')

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const createMail = (recaptchaKey: string) => {
    const emailBody = `Hola soy ${name.value}
      estudiante de ${career.value} de ${semester.value} semestre. \n
      ${comments.value}`
    return ({
      message: emailBody,
      from_name: name.value,
      reply_to: `${matricualtionNumber.value}@itesm.mx`,
      position: selectedPosition.title,
      recaptchaKey,
    })
  }

  const handleSubmit = (recaptchaKey: string) => {
    onSubmit()
    if (name.value && career.value && semester.value
      && matricualtionNumber.value && comments.value) {
      const mailParams = createMail(recaptchaKey)
      setIsLoading(true)
      sendJoinUsEmail(mailParams).then((result) => {
        if (result.status === 1) {
          setOpen(true)
          setMessage('Thanks for your interest! Check your Tec email.')
          setSeverity('success')
        } else {
          setOpen(true)
          setMessage('Something went wrong! Please retry later')
          setSeverity('error')
        }
      }, (error) => {
        setOpen(true)
        setMessage('Something went wrong! Please retry later')
        setSeverity('error')
        throw new Error(`Something went wrong! \n${error.message}`)
      }).finally(() => {
        setIsLoading(false)
        toggle()
      })
    }
  }

  const handleReCaptcha = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const recaptcharef = recaptchaRef.current
    recaptcharef.reset()
    recaptcharef.execute()
  }

  const getError = () => {
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

  return (
    <>
      <Modal id="candidates-join-modal" isOpen={isOpen} toggle={toggle} className="position-relative">
        <ModalHeader toggle={toggle}>
          {' '}
          { greeting }
        </ModalHeader>
        <ModalBody>
          <Form className={isLoading ? 'formLoading' : ''}>
            <Row>
              <FormGroup className="col-md-6">
                <Label>Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Juanito"
                  disabled={isLoading}
                  innerRef={(input) => { setName(input) }}
                />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Label>Matriculation Number</Label>
                <Input
                  type="text"
                  id="matricualtionNumber"
                  placeholder="A01283070"
                  disabled={isLoading}
                  innerRef={(input) => { setMatricualtionNumber(input) }}
                />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Label>Career</Label>
                <Input
                  type="text"
                  id="career"
                  placeholder="IMT"
                  disabled={isLoading}
                  innerRef={(input) => { setCareer(input) }}
                />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Label>Semester</Label>
                <Input
                  type="select"
                  id="semester"
                  disabled={isLoading}
                  innerRef={(input) => { setSemester(input) }}
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
                  disabled={isLoading}
                  placeholder="Why you want to join the team?"
                  innerRef={(input) => { setComments(input) }}
                />
              </FormGroup>
            </Row>
            <>
              {getError()}
              {' '}
            </>
            <Row className="mt-4 mb-1 justify-content-center">
              <Button className="mr-4 col-3 join" type="button" onClick={handleReCaptcha} disabled={isLoading}>Join!</Button>
            </Row>
          </Form>
          <div className={`loadingSymbol ${isLoading ? '' : 'd-none'}`}>
            <svg className="spinSymbol" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </div>
        </ModalBody>
      </Modal>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.REACT_APP_RECAPTCHA}
        className={isOpen ? '' : 'd-none'}
        onChange={handleSubmit}
      />
      <FormsSnackBar
        message={message}
        open_snackbar={open}
        severity={severity}
        handleClose={handleClose}
      />
    </>
  )
}

export default FormsModal
