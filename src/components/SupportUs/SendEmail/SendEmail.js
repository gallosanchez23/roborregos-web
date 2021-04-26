// @flow
import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from 'reactstrap'
import './SendEmail.css'
import {
  makeStyles,
  withStyles,
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
import teal from '@material-ui/core/colors/purple'
import sendJoinEmail from '../../../scripts/apiScripts'

type Props = {
  language: number
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const styles = {
  'input-label': {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width: '100%',
    color: 'red',
  },

  input: {
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: 'blue',
    },
  },
}

const FormTextField = withStyles({
  root: {
    color: 'blue',
    borderColor: '#6A2C94',
    backgroundColor: 'white',
    'input-label': {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      width: '100%',
      color: 'red',
    },
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: 'blue',
    },
    input: {
      '&::placeholder': {
        textOverflow: 'ellipsis !important',
        color: 'blue',
      },
    },
    '& .MuiOutlinedInput-root': {
      height: '9vh',
      '& fieldset': {
        borderColor: '#6A2C94',
      },
      '&:hover fieldset': {
        borderColor: '#6A2C94',
      },
      '&:focused fieldset': {
        borderColor: '#6A2C94',
      },
      '&::placeholder': {
        textOverflow: 'ellipsis !important',
        color: 'blue',
      },
      input: {
        '&::placeholder': {
          textOverflow: 'ellipsis !important',
          color: 'blue',
        },
      },
    },
  },
})(TextField)

const MultipleLineFormTextField = withStyles({
  root: {
    color: 'blue',
    borderColor: '#6A2C94',
    backgroundColor: 'white',
    'input-label': {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      width: '100%',
      color: 'red',
    },
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: 'blue',
    },
    input: {
      '&::placeholder': {
        textOverflow: 'ellipsis !important',
        color: 'blue',
      },
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#6A2C94',
      },
      '&:hover fieldset': {
        borderColor: '#6A2C94',
      },
      '&:focused fieldset': {
        borderColor: '#6A2C94',
      },
      '&::placeholder': {
        textOverflow: 'ellipsis !important',
        color: 'blue',
      },
      input: {
        '&::placeholder': {
          textOverflow: 'ellipsis !important',
          color: 'blue',
        },
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

  const handleSubmit = () => {
    alert('Submitting message!')
  }

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

  return (
    <Row id="send-email">
      <Col xs="12" md="6" className="send-email-phrase">
        <div className="big-letters-title">
          {title_send_email[language]}
        </div>
      </Col>
      <Col xs="12" md="6" className="send-email-form">
        <div className="form-container">
          {/* <form className={classes.root} noValidate autoComplete="off" onSubmit={() => handleSubmit()} /> */}
          <Row className="send-email-title">
            {forms[0][language]}
          </Row>
          <Row className="form-input-container">
            <FormTextField
              id="outlined-helperText"
              // label={forms[1][language]}
              variant="outlined"
              placeholder={forms[1][language]}
              onChange={handleChangeName}
              fullWidth
              InputProps={{ classes: { input: classes.input } }}
            />
          </Row>
          <Row className="form-input-container">
            <FormTextField
              id="outlined-helperText"
              // label="Email"
              placeholder="Email"
              variant="outlined"
              onChange={handleChangeEmail}
              fullWidth
            />
          </Row>
          <Row className="form-input-container">
            <FormTextField
              id="outlined-helperText"
              // label={forms[3][language]}
              placeholder={forms[3][language]}
              variant="outlined"
              onChange={handleChangePhone}
              fullWidth
            />
          </Row>
          <Row>
            <MultipleLineFormTextField
              id="outlined-multiline-static"
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
            <Button className="mr-4 col-3 join form-button-submit" type="submit" value="submit">{forms[6][language]}</Button>
          </Row>
        </div>
      </Col>
    </Row>
  )
}

export default SendEmail
