import React, { useEffect } from "react";
import wrapper from '../store/configureStore';
import Layout from './layout/index';
import axios from '../util/index';
import { ZONE_REQUEST } from '../reducers/zone';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
// import { setCookie, TOKEN_NAME } from '../util/cookie';
const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(({ user }) => user);
  console.log(me);
  // axios.defaults.headers.common['Authorization'] = getCookie(TOKEN_NAME);
  return (
    <>
      <Layout>
        <main>gogogo</main>
      </Layout>
    </>
  )
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      const cookie = req ? req.headers.cookie : '';
      axios.defaults.headers.Cookie = '';
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
        store.dispatch({
          type: LOAD_USER_REQUEST,
        })
      }
      store.dispatch({
        type: ZONE_REQUEST,
      });

      // TODO: LOAD_POSTS
      store.dispatch(END);
      await store.sagaTask.toPromise();
    }

);
export default Home;

