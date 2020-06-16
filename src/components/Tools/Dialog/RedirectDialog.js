import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Typography from '@material-ui/core/Typography'
import { DialogContentText } from '@material-ui/core'
import { Link } from 'react-router-dom'
import WarningIcon from '@material-ui/icons/Warning'
import './dialog.css'
// import Sadface from '@material-ui/icons/SentimentVeryDissatisfied'


/* 
  [HOW TO USE]

  import RedirectDialog from '/RedirectDialog'

  let [Dialog, setDialog] = useState(null)
  
  let [title, msg] = ["Example", "Testing"]

  const openMsg = () => setDialog(RedirectDialog(title, msg, setDialog))

  return (
    <button onClick={openMsg}
    { Dialog }
  )
*/


// <Msg title="" msg="" handleClose={} />
const Msg = (props) => {
  let [openDialog, setOpenDialog] = useState(true)

  const dialog = props

  const closeDialog = () => {
    setOpenDialog(false)
    dialog.handleClose()
  }

  return (
    <Dialog
      className="disable-select"
      // onClose={closeDialog}
      // Diálogo não pode ser fechado por clique fora da caixa
      aria-labelledby="title"
      open={openDialog}
    >
      <DialogTitle  id='title' onClose={closeDialog}>
        { dialog.title } 
        <WarningIcon fontSize="small"/>
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom component='span'>
          <DialogContentText>
            { dialog.msg }
          </DialogContentText>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color="primary">
          <Link className="dialogBtn" to="/">
            Ok, Voltar
            {/* <Sadface/> */}
          </Link>
        </Button>
      </DialogActions>
    </Dialog>
  )
}


const HandleDialog = {
  open: (title, msg, setState) =>
    <Msg
      title={title}
      msg={msg}
      handleClose={() => HandleDialog.close(setState)}
    />,
  close: (setState) => setState(null)
}


const RedirectDialog = HandleDialog.open
export default RedirectDialog