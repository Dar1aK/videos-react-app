import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import WebIcon from '@mui/icons-material/Web'
import YardIcon from '@mui/icons-material/Yard'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import Wrapper from '../../components/Wrapper'
import { addNewVideo, selectAdd, setInit, clearError } from './addSlice'

import styles from './add.module.css'

const ErrorFormComponent = ({ error }) =>
  error?.map(({ message, path }) => (
    <div key={message} className={styles.error}>
      <p className={styles.error}>
        {path && <span className={styles.error__path}>({path.join(', ')})</span>} {message}
      </p>
    </div>
  ))

const Add: FC = () => {
  const [slug, setSlug] = useState('')
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [isPublic, setPublic] = useState(true)
  const dispatch = useAppDispatch()
  const { status, error } = useAppSelector(selectAdd)
  console.log()

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = { slug, title, url, isPublic }
    dispatch(addNewVideo(body))
  }

  useEffect(() => {
    dispatch(setInit())
  }, [])

  useEffect(() => {
    if (error?.length > 0) {
      dispatch(clearError())
    }
  }, [slug, title, url, isPublic])

  return (
    <Wrapper>
      <h1>Add new entry! 💫</h1>
      <div className={styles.block}>
        {status === 'success' ? (
          <div>
            <h3>Thank you!</h3>
            <div>
              You can{' '}
              <Button variant='contained' size='small' tabIndex={-1}>
                <Link to='/' className='textWhite'>
                  Watch videos
                </Link>
              </Button>{' '}
              or{' '}
              <Button variant='contained' size='small' onClick={() => window.location.reload()} tabIndex={-1}>
                Add another one
              </Button>
            </div>
          </div>
        ) : (
          <Box
            component='form'
            sx={{
              '& .MuiTextField-root': { mb: 1, mr: 1 },
            }}
            noValidate
            autoComplete='off'
          >
            <div>
              <TextField
                name='slug'
                label='Slug'
                variant='filled'
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                helperText='Must be unique'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <YardIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                id='title'
                label='Title'
                variant='filled'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <DriveFileRenameOutlineIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div>
              <TextField
                label='Url'
                variant='filled'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <WebIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel
                control={<Checkbox checked={isPublic} onChange={(e) => setPublic(e.target.checked)} />}
                label='Public'
              />
            </div>
            {error?.length > 0 && <ErrorFormComponent error={error} />}

            <Button variant='contained' type='submit' size='large' disabled={false} onClick={handleSubmit}>
              Create
            </Button>
          </Box>
        )}

        <div className={styles.block__img} />
      </div>
    </Wrapper>
  )
}

export default Add
