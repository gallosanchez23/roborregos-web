// @flow
import React, { useState } from 'react'
import { Row, Col, Button } from 'reactstrap'
import ReCAPTCHA from "react-google-recaptcha"
import './SendEmail.css'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import { sendContactUsEmail } from '../../../scripts/apiScripts'

type Props = {
  language: number
};

const FormTextField = withStyles({
  root: {
    '& input:valid:focus + fieldset': {
      borderColor: '#6A2C94',
    },
    '& .MuiTextField-root': {
      borderColor: '#6A2C94',
    },
    '& .MuiInputLabel-root': {
      color: '#6A2C94',
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'white',
      height: '9vh',
      '& fieldset': {
        borderColor: '#6A2C94',
      },
      '&:hover fieldset': {
        borderColor: '#6A2C94',
      },
    },
  },
})(TextField)

const MultipleLineFormTextField = withStyles({
  root: {
    '& input:valid:focus + fieldset': {
      borderColor: '#6A2C94',
    },
    '& .MuiTextField-root': {
      borderColor: '#6A2C94',
    },
    '&:valid:focus + fieldset': {
      borderColor: '#6A2C94',
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'white',
      '& fieldset': {
        borderColor: '#6A2C94',
      },
      '&:hover fieldset': {
        borderColor: '#6A2C94',
      },
    },
  },
})(TextField)

const SendCopyCheckbox = withStyles({
  root: {
    '&$checked': {
      color: '#6A2C94',
    },
  },
  checked: {},
})(Checkbox)

function SendEmail({ language }: Props) {
  const recaptchaRef: React.RefObject<HTMLElement> = React.createRef();

  const title_send_email = ['Con tu ayuda podemos llegar más lejos.', 'With your help we can achieve more.']

  const forms = [
    ['¡Contáctanos!', 'Get in touch!'],
    ['Nombre', 'Name'],
    'Email',
    ['Teléfono', 'Phone'],
    ['Mensaje', 'Your message'],
    ['Enviar copia a mi correo', 'Send a copy to my email'],
    ['Enviar', 'Send'],
  ]

  const helperText = ['Favor de llenar este campo', 'Please fill this textfield']
  const paddingError = ['0vh', '3.3vh']

  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [sendCopy, setCopy] = useState(false)
  const [error, setError] = useState([false, false, false, false])

  const handleChangeName = (event) => {
    setName(event.target.value)
    if (event.target.value !== '') {
      error[0] = false
      setError(error)
    }
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
    if (event.target.value !== '') {
      error[1] = false
      setError(error)
    }
  }

  const handleChangePhone = (event) => {
    setPhone(event.target.value)
    if (event.target.value !== '') {
      error[2] = false
      setError(error)
    }
  }

  const handleChangeMessage = (event) => {
    setMessage(event.target.value)
    if (event.target.value !== '') {
      error[3] = false
      setError(error)
    }
  }

  const handleChangeCheckBox = (event) => {
    setCopy(event.target.checked)
  }

  const createMail = (recaptchaKey: string) => {
    const emailBody = `Name: ${name}\n
      Phone number: ${phone}\n
      Email: ${email}\n
      ${message}`
    return ({
      message: emailBody,
      from_name: name,
      reply_to: email,
      send_copy: sendCopy,
      recaptchaKey: recaptchaKey,
    })
  }

  const handleSubmit = (recaptchaKey: string) => {
    if (name !== '' && email !== '' && phone !== '' && message !== '') {
      const mailParams = createMail(recaptchaKey)
      setIsLoading(true);
      
      sendContactUsEmail(mailParams).then((result) => {
        if (result.status === 200) {
          // eslint-disable-next-line no-alert
          alert('Thanks for your interest! \nEmail Sent. \n')
          setName('')
          setEmail('')
          setPhone('')
          setMessage('')
          setCopy(false)
        } else {
          // eslint-disable-next-line no-alert
          alert(`Something went wrong! \nEmail-Server Error, Retry Later`)
        }
      }, (error) => {
        // eslint-disable-next-line no-alert
        alert(`Something went wrong! \n${error.message}`)
      }).finally(() => {
        setIsLoading(false);
      })
    } else {
      const errors = [false, false, false]
      if (name === '') { errors[0] = true }
      if (email === '') { errors[1] = true }
      if (phone === '') { errors[2] = true }
      if (message === '') { errors[3] = true }
      setError(errors)
    }
  }

  const handleReCaptcha = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const recaptchaRef_ = recaptchaRef.current;
    recaptchaRef_.reset();
    recaptchaRef_.execute();
  }

  return (
    <>
      <Row id="send-email">
        <Col xs="12" md="6" className="send-email-phrase">
          <div className="big-letters-title">
            {title_send_email[language]}
          </div>
        </Col>
        <Col xs="12" md="6" className="send-email-form position-relative">
          <div className={`form-container ${isLoading ? 'formLoading' : ''}`}>
            <Row className="send-email-title">
              {forms[0][language]}
            </Row>
            <Row style={{ paddingBottom: error[0] ? paddingError[0] : paddingError[1] }}>
              <FormTextField
                variant="outlined"
                label={forms[1][language]}
                onChange={handleChangeName}
                fullWidth
                value={name}
                error={error[0]}
                disabled={isLoading}
                helperText={error[0] ? helperText[language] : ''}
              />
            </Row>
            <Row style={{ paddingBottom: error[1] ? paddingError[0] : paddingError[1] }}>
              <FormTextField
                label="Email"
                variant="outlined"
                onChange={handleChangeEmail}
                fullWidth
                value={email}
                error={error[1]}
                disabled={isLoading}
                helperText={error[1] ? helperText[language] : ''}
              />
            </Row>
            <Row style={{ paddingBottom: error[2] ? paddingError[0] : paddingError[1] }}>
              <FormTextField
                label={forms[3][language]}
                variant="outlined"
                onChange={handleChangePhone}
                fullWidth
                className="SelectOptionsDropDown"
                value={phone}
                error={error[2]}
                disabled={isLoading}
                helperText={error[2] ? helperText[language] : ''}
              />
            </Row>
            <Row style={{ paddingBottom: error[3] ? paddingError[0] : paddingError[1] }}>
              <MultipleLineFormTextField
                multiline
                rows={4}
                variant="outlined"
                placeholder={forms[4][language]}
                onChange={handleChangeMessage}
                fullWidth
                value={message}
                error={error[3]}
                disabled={isLoading}
                helperText={error[3] ? helperText[language] : ''}
              />
            </Row>
            <Row>
              <SendCopyCheckbox
                onChange={handleChangeCheckBox}
                checked={sendCopy}
                disabled={isLoading}
              />
              <div className="checkbox-description">
                {forms[5][language]}
              </div>
            </Row>
            <Row className="mt-4 mb-1 justify-content-center">
              <Button
                className="mr-4 col-3 join form-button-submit"
                type="submit"
                value="submit"
                disabled={isLoading}
                onClick={handleReCaptcha}
              >
                {forms[6][language]}
              </Button>
            </Row>
          </div>
          <div className={`loadingSymbol ${isLoading ? '' : 'd-none'}`}>
            <svg className="spinSymbol" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        </Col>
      </Row>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.REACT_APP_RECAPTCHA}
        className={true ? '' : 'd-none'}
        onChange={handleSubmit}
      />
    </>
  )
}

export default SendEmail
