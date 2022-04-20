import React, { FC, useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getDetailVideo, selectDetail } from './detailSlice';
import Wrapper from '../../components/Wrapper';

const Detail: FC = () => {
  const { active } = useAppSelector(selectDetail);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getDetailVideo(id));
    }
  }, []);

  return (
    <Wrapper>
      <Link to="/">Back</Link>
      <h2>{active?.attributes?.title}</h2>
      <video width="100%" controls src={active?.attributes?.url} />
    </Wrapper>
  );
};

export default Detail;
