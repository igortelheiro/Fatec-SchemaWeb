import React, { useState } from 'react'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import './dialog.css'


/* 
  [HOW TO USE]

  import ConfDialog from '/ConfDialog'

  let [Dialog, setDialog] = useState(null)
  let [Choice, setChoice] = useState(false)
  
  let [title, msg] = ["Example", "Testing"]

  const openDialog = () => setDialog(ConfDialog(title, msg, setChoice, setDialog))

  return (
    <button onClick={openDialog}
    { Dialog }
  )
*/


// <ConfDialog title="" msg="" setChoice={} handleClose={} />
const Msg = (props) => {
  let [openDialog, setOpenDialog] = useState(true)

  const dialog = props

  const handleClose = () => {
    setOpenDialog(false)
    dialog.handleClose()
  }

  const handleChoice = (bool) => {
    dialog.setChoice(bool)
    handleClose()
  }

  const title_css = {
    fontSize: '10px',
    margin: 5,
    padding: 5,
    textAlign: "center"
  }

  return (
    <Dialog
      className="disable-select"
      open={openDialog}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle style={title_css} id="alert-dialog-title">{dialog.title}</DialogTitle>
      <Divider />
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{dialog.msg}</DialogContentText>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button className="dialogBtn" onClick={() => handleChoice(true)} color="primary"> SIM </Button>
        <Button className="dialogBtn" onClick={() => handleChoice(false)} color="primary" autoFocus> NÃO </Button>
      </DialogActions>
    </Dialog>
  )
}


const HandleDialog = {
  open: (title, msg, setChoice, setState) =>
    <Msg
      title={title}
      msg={msg}
      setChoice={setChoice}
      handleClose={() => HandleDialog.close(setState)}
    />,
  close: (setState) => setState(null)
}

const ConfDialog = HandleDialog.open
export default ConfDialog