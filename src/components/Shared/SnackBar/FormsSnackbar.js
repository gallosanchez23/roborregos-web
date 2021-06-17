// @flow
import React, { useState } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

type Props = {
    message: string,
    severity: string,
    open_snackbar: boolean
};

function FormsSnackbar(props: Props) {
  const { message, severity, open_snackbar } = props

  const [open, setOpen] = useState(open_snackbar)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  function Alert() {
    alert(open)
    return <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity={severity} />
  }

  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
      <Alert>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default FormsSnackbar
