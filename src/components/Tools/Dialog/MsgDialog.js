import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Typography from '@material-ui/core/Typography'
import { DialogContentText } from '@material-ui/core'
import './dialog.css'


/* 
  [HOW TO USE]

  import MsgDialog from '/msgDialog'

  let [Dialog, setDialog] = useState(null)
  
  let [title, msg] = ["Example", "Testing"]

  const openMsg = () => setDialog(MsgDialog(title, msg, setDialog))

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
      onClose={closeDialog}
      aria-labelledby="title"
      open={openDialog}
    >
      <DialogTitle  id='title' onClose={closeDialog}>
        { dialog.title }
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom component='span'>
          <DialogContentText>
            { dialog.msg }
          </DialogContentText>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button className="dialogBtn" onClick={closeDialog} color="primary">
          OK
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


const MsgDialog = HandleDialog.open
export default MsgDialog