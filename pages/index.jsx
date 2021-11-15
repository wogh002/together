import React, { useEffect } from "react";
import wrapper from '../store/configureStore';
import Layout from './layout/index';
import axios from '../api/axios';
import { ZONE_REQUEST } from '../reducers/zone';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import { LOAD_USER_REQUEST } from '../reducers/user';
import { getCookie, setCookie, TOKEN_NAME } from '../util/cookie';
const Home = () => {
  const { me } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  //   setCookie(TOKEN_NAME, action.data.headers.authorization, { path: "/" });
  // axios.defaults.headers.common['Authorization'] = getCookie(TOKEN_NAME);
  useEffect(() => {
    if (localStorage.getItem('aaa')) {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('aaa');
      dispatch({
        type: LOAD_USER_REQUEST,
      });
    }
  }, [dispatch]);

  return (
    <>
      <Layout>
        <main>{me && me.userId}</main>
      </Layout>
    </>
  )
}
// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ req }) => {
//       console.log(req.headers.cookie);
//       // setCookie(TOKEN_NAME, req.headers.cookie, { path: "/" });
//       // req.headers.cookie.slice(8, req.headers.cookie.length) : '';
//       // const TOKEN = req ? typeof window !== "undefined" && window.localStorage.getItem('aaa') : "";
//       // const TOKEN = typeof window !== "undefined" && window.localStorage.getItem('aaa');

//       // if (req && TOKEN) {
//       //   axios.defaults.headers.common['Authorization'] = TOKEN;
//       //   store.dispatch({
//       //     type: LOAD_USER_REQUEST,
//       //   })
//       //   store.dispatch(END);
//       //   await store.sagaTask.toPromise();
//       // }
//       // store.dispatch({
//       //   type: ZONE_REQUEST,
//       // });
//       // TODO: LOAD_POSTS
//       // store.dispatch(END);
//       // await store.sagaTask.toPromise();
//     }
// );
export default Home;

