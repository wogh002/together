import React, { useEffect } from "react";
import wrapper from '../store/configureStore';
import Layout from './layout/index';
import axios from '../api/axios';
import { ZONE_REQUEST } from '../reducers/zone';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import { LOAD_USER_REQUEST } from '../reducers/user';
import { LOAD_POSTS_REQUEST } from "../reducers/post";
import { NAME } from '../util/user';
const Home = () => {
  const { me } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem(NAME)) {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem(NAME);
      dispatch({
        type: LOAD_USER_REQUEST,
      });
    }
  }, [dispatch]);

  return (
    <>
      <Layout>
      </Layout>
    </>
  )
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      store.dispatch({
        type: LOAD_POSTS_REQUEST,
        data: {
          page: 0,
          size: 8,
        }
      });
      store.dispatch({
        type: ZONE_REQUEST,
      });
      store.dispatch(END);
      await store.sagaTask.toPromise();
    }
);
export default Home;

