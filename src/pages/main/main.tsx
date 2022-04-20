import React, { useEffect, useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { getVideosList, selectVideos } from './mainSlice'
import Video from '../../components/Video'
import Popup from '../../components/Popup'
import Wrapper from '../../components/Wrapper'

import styles from './main.module.css'

const Main = () => {
  const { items } = useAppSelector(selectVideos)
  const dispatch = useAppDispatch()
  const [isOpen, setOpened] = useState(false)

  useEffect(() => {
    dispatch(getVideosList())
  }, [])

  return (
    <Wrapper>
      <h1>Videos 🌻</h1>
      {items?.length ? (
        <div className={styles.wrapper}>
          {items.map((props) => (
            <Video key={props?.attributes?.slug} {...props} setOpened={setOpened} />
          ))}
        </div>
      ) : (
        <div>You have no videos, add it in Strapi! 🚀</div>
      )}

      <Popup {...{ isOpen, setOpened }} />
    </Wrapper>
  )
}

export default Main
