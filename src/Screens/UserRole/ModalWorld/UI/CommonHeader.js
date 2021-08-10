import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const CommonHeader = () => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const [isModal, setmodal] = useState(true)
  return (
    <>
      <div className='container tab pt-4 d-flex justify-content-center'>
        <div className='d-flex justify-content-between rounded-xl w-75 mb-3 black-bg p-sm-3 py-3 px-1'>
          <ul className={`nav nav-pills ms-sm-3 ms-2 ${isModal ? 'peach-nav' : ''}`} id='pills-tab' role='tablist'>
            <li className='nav-item position-relative h4 m-0'>
              <Link className='nav-link active text-white' id='pills-info-tab' to='/modals'>
                <b>Info</b>
              </Link>
            </li>
            <li className='nav-item position-relative h4 mb-0 ms-sm-3'>
              <Link className='nav-link text-white' id='pills-photos-tab' to='/image'>
                Photos
              </Link>
            </li>
          </ul>
          <div>
            <p className='d-inline-block mb-0'>
              <button onClick={handleClickOpen} className={`btn text-white rounded-pill px-sm-4 px-1 mr-3 ${isModal ? 'peach-bg peach-border' : 'pink-bg pink-border'}`}>Send Enquiry</button>
            </p>
            <p className='d-inline-block mb-0 ms-md-4'>
              <NavLink to='/' className={`btn btn-outline rounded-pill  px-sm-4 px-1 ${isModal ? 'peach-border text-peach' : 'pink-border text-pink'}`}>+Add Credits</NavLink>
            </p>
            {isModal
              ? <p className='d-inline-block mb-0'>
                <NavLink to='/' className='btn btn-outline rounded-pill  px-sm-4 px-1 peach-border text-peach ml-3'>Follow</NavLink>
              </p>
              : null}
          </div>
        </div>
      </div>

      <Dialog onClose={handleClose} open={open} fullWidth maxWidth='sm'>
        <DialogTitle>
          <div className='d-flex align-items-center justify-content-between'>
            <h4 className='m-0'>Messege to Kate Upton</h4>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent className='messageBox'>
          <textarea
            className='form-control input-boxes'
          />
          <button
            type='submit'
            className='btn text-center pink-bg signup-button widht100'
          >Send
          </button>
        </DialogContent>

      </Dialog>
    </>
  )
}
export default CommonHeader
