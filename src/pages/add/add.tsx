import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import Wrapper from '../../components/Wrapper'
import { addNewVideo, selectAdd, setInit } from './addSlice'

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

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = { slug, title, url, isPublic }
    dispatch(addNewVideo(body))
  }

  useEffect(() => {
    dispatch(setInit())
  }, [])

  return (
    <Wrapper>
      <h1>Add new entry! 💫</h1>
      <div className={styles.block}>
        {status === 'success' ? (
          <div>
            <p>Thank you!</p>
            <div>
              You can{' '}
              <Button variant='contained' size='small'>
                <Link to='/'>Watch videos</Link>
              </Button>{' '}
              or{' '}
              <Button variant='contained' size='small' onClick={() => window.location.reload()}>
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
              />
              <TextField
                id='title'
                label='Title'
                variant='filled'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <TextField label='Url' variant='filled' value={url} onChange={(e) => setUrl(e.target.value)} />
              <FormControlLabel
                control={<Checkbox checked={isPublic} onChange={(e) => setPublic(e.target.checked)} />}
                label='Public'
              />
            </div>
            {error?.length > 0 && <ErrorFormComponent error={error} />}

            <Button variant='contained' type='submit' size='large' disabled={false} onClick={handleSubmit}>
              Update
            </Button>
          </Box>
        )}

        <div className={styles.block__img} />
      </div>
    </Wrapper>
  )
}

export default Add
