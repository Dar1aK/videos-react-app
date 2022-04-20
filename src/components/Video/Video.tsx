import React, { FC } from 'react'

import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

import { useAppDispatch } from '../../app/hooks'
import { setActive } from '../../pages/main/mainSlice'
import { ItemsType } from './types'

import styles from './Video.module.css'

type VideoProps = ItemsType & { setOpened: React.Dispatch<React.SetStateAction<boolean>> }

const Video: FC<VideoProps> = ({ id, attributes: { url, title }, setOpened }) => {
  const dispatch = useAppDispatch()

  const handleOpen = () => {
    dispatch(setActive(id))
    setOpened(true)
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <video width='100%' src={url} />
      <Button variant='text' type='button' onClick={handleOpen}>
        Edit
      </Button>{' '}
      <Button variant='contained' size='small' tabIndex={-1}>
        <Link to={`/${id}`} className='textWhite'>
          Watch video
        </Link>
      </Button>
    </div>
  )
}

export default Video
