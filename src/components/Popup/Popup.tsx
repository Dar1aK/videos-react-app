import React, { FC, useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { updateUrl, selectVideos } from '../../pages/main/mainSlice';

import styles from './Popup.module.css';

type PopupTypes = {
  isOpen: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const Popup: FC<PopupTypes> = ({ isOpen, setOpened }) => {
  const [url, setUrl] = useState('');
  const dispatch = useAppDispatch();
  const { active } = useAppSelector(selectVideos);

  useEffect(() => {
    if (!isOpen) {
      setUrl('');
    }
  }, [isOpen]);

  const handleChange = e => setUrl(e.target.value);

  const handleEdit = () =>
    dispatch(updateUrl({ id: active, url })).then(() => setOpened(false));

  return (
    <div className={`${styles.blackout} ${isOpen && styles.open}`}>
      <div className={styles.content}>
        <button
          type="button"
          onClick={() => setOpened(false)}
          className={styles.close}
        >
          X
        </button>
        <input
          type="text"
          placeholder="Url"
          value={url}
          onChange={handleChange}
        />
        <button type="submit" disabled={!url} onClick={handleEdit}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Popup;
