import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../app/hooks';
import { setActive } from '../../pages/main/mainSlice';
import { ItemsType } from './types';

import styles from './Video.module.css';

type VideoProps = ItemsType & {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const Video: FC<VideoProps> = ({
  id,
  attributes: { title, url },
  setOpened,
}) => {
  const dispatch = useAppDispatch();

  const handleOpen = () => {
    dispatch(setActive(id));
    setOpened(true);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <video width="100%" src={url} />
      <button type="button" onClick={handleOpen}>
        Edit
      </button>

      <Link to={`/${id}`}>Watch video</Link>
    </div>
  );
};

export default Video;
