// @flow
import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from 'reactstrap'
import './SendEmail.css'
import {
  makeStyles,
  withStyles,
  createStyles,
} from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import AccountCircle from '@material-ui/icons/AccountCircle'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import sendJoinEmail from '../../../scripts/apiScripts'

type Props = {
  language: number
};

const styles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const FormTextField = withStyles({
  root: {
    backgroundColor: 'white',
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
    backgroundColor: 'white',
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
})((props) => <Checkbox color="default" {...props} />)

const inputStyle = {
  fontFamily: 'Open Sans',
  fontSize: '18.9px',
  color: 'red',
}

function SendEmail({ language }: Props) {
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

  const classes = styles

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [sendCopy, setCopy] = useState(false)

  const handleChangeName = (event) => {
    setName(event.target.value)
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleChangePhone = (event) => {
    setPhone(event.target.value)
  }

  const handleChangeMessage = (event) => {
    setMessage(event.target.value)
  }

  const handleChangeCheckBox = (event) => {
    setCopy(event.target.checked)
  }

  const createMail = () => {
    const emailBody = `Name: ${name}\n
      Phone number: ${phone}\n
      Email: ${email}\n
      ${message}\n
      Send copy: ${sendCopy}`
    return ({
      message: emailBody,
      from_name: name,
      reply_to: email,
      sendCopy,
    })
  }

  const handleSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (name !== '' && email !== '' && phone !== '' && message !== '') {
      const mailParams = createMail()
      sendJoinEmail(mailParams).then((result) => {
        if (result.status === 200) {
          // eslint-disable-next-line no-alert
          alert('Thanks for your interest! \nCheck your Tec email \n')
          // TODO: delete values of formulary
        } else {
          throw new Error('Email-Server Error, Retry Later')
        }
      }, (error) => {
        // eslint-disable-next-line no-alert
        alert(`Something went wrong! \n${error.text}`)
      })
      alert(mailParams.message)
    } else {
      alert('Please fill all areas of the formulary.')
      // TODO: put error in formulary
    }
  }

  return (
    <Row id="send-email">
      <Col xs="12" md="6" className="send-email-phrase">
        <div className="big-letters-title">
          {title_send_email[language]}
        </div>
      </Col>
      <Col xs="12" md="6" className="send-email-form">
        <div className="form-container">
          <Row className="send-email-title">
            {forms[0][language]}
          </Row>
          <Row className="form-input-container">
            <FormTextField
              variant="outlined"
              label={forms[1][language]}
              onChange={handleChangeName}
              fullWidth
            />
          </Row>
          <Row className="form-input-container">
            <FormTextField
              label="Email"
              variant="outlined"
              onChange={handleChangeEmail}
              fullWidth
            />
          </Row>
          <Row className="form-input-container">
            <FormTextField
              label={forms[3][language]}
              variant="outlined"
              onChange={handleChangePhone}
              fullWidth
              className="SelectOptionsDropDown"
            />
          </Row>
          <Row>
            <MultipleLineFormTextField
              multiline
              rows={4}
              variant="outlined"
              placeholder={forms[4][language]}
              onChange={handleChangeMessage}
              fullWidth
            />
          </Row>
          <Row>
            <SendCopyCheckbox
              onChange={handleChangeCheckBox}
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
              onClick={handleSubmit}
            >
              {forms[6][language]}
            </Button>
          </Row>
        </div>
      </Col>
    </Row>
  )
}

export default SendEmail
