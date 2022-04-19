import React, {useEffect, useState} from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { incrementAsync, selectVideos } from './mainSlice';
import Video from "../../components/Video"
import Popup from '../../components/Popup';

import styles from './index.module.css'

const Main = () => {
    const {items, status} = useAppSelector(selectVideos);
    const dispatch = useAppDispatch();
    const [isOpen, setOpened] = useState(false);

    useEffect(() => {
        dispatch(incrementAsync());
    }, []);

    return (<><div className={styles.wrapper}>
        {items.map((props) => <Video key={props?.attributes?.slug} {...props} setOpened={setOpened} />)}
    </div>
    <Popup {...{isOpen, setOpened}}/></>)
}

export default Main;