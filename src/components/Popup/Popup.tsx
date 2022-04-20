import React, { FC, useEffect, useState } from 'react'

import CloseIcon from '@mui/icons-material/Close'
import Backdrop from '@mui/material/Backdrop'
import Button from '@mui/material/Button'
import Fade from '@mui/material/Fade'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { updateUrl, selectVideos } from '../../pages/main/mainSlice'

import styles from './Popup.module.css'

type PopupTypes = {
  isOpen: boolean
  setOpened: React.Dispatch<React.SetStateAction<boolean>>
}

/** Popup for edit video url */

const Popup: FC<PopupTypes> = ({ isOpen, setOpened }) => {
  const [url, setUrl] = useState('')
  const dispatch = useAppDispatch()
  const { active } = useAppSelector(selectVideos)

  useEffect(() => {
    if (!isOpen) {
      setUrl('')
    }
  }, [isOpen])

  const handleChange = (e) => setUrl(e.target.value)

  const handleEdit = () => dispatch(updateUrl({ id: active, url })).then(() => setOpened(false))

  return (
    <Modal
      open={isOpen}
      onClose={() => setOpened(false)}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <div className={styles.content}>
          <TextField label='Url' variant='filled' autoFocus value={url} onChange={handleChange} />
          <Button variant='contained' type='submit' size='large' disabled={!url} onClick={handleEdit}>
            Update
          </Button>
          <CloseIcon type='button' onClick={() => setOpened(false)} className={styles.close} />
        </div>
      </Fade>
    </Modal>
  )
}

export default Popup
