import React, {useEffect, useState} from 'react'
import cn from 'classnames'

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { updateUrl, selectVideos } from '../../pages/main/mainSlice';

import styles from './Popup.module.css'

const Popup = ({isOpen, setOpened}) => {
  const [url, setUrl] = useState('');
  const dispatch = useAppDispatch();
  const {active} = useAppSelector(selectVideos)

  const handleChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  }

  const handleEdit = (e) => {
    dispatch(updateUrl({ id: active, url: url })).then(() => setOpened(false))
}
  return (<div className={cn(styles.blackout, {[styles.open]: isOpen})}>
    <div className={styles.content}>
      <button type='button' onClick={() => setOpened(false)}>X</button>
      <input type="text" value={url} onChange={handleChange} /> <button type="submit" disabled={!url} onClick={handleEdit}>Update</button>
    </div>
</div>)
}

export default Popup;