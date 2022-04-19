import React, { FC, useRef, useEffect } from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { updateUrl, setActive } from '../../pages/main/mainSlice';

import styles from './index.module.css'

type VideoProps = {
    id: number;
    attributes: {
        url: string;
        slug: string;
        title: string
    }
    setOpened: any
}

const Video: FC<VideoProps> = ({id, attributes: {url, slug, title}, setOpened}) => {
    const dispatch = useAppDispatch();
    
    const handleOpen = () => {
        dispatch(setActive(id))
        setOpened(true)
    }

    return (<div className={styles.wrapper}>
        <h2 className={styles.title}>{title}</h2>
        <video  width='100%' controls src={url} />
        <button type="button" onClick={handleOpen}>Edit</button>
        </div>)
}

export default Video;