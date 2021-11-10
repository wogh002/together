import styled from 'styled-components';
import wrapper from '../store/configureStore';
import Layout from './layout/index';
const Home = () => {
  return (
    <>
      <Layout>
        <main>gogogo</main>
      </Layout>
    </>
  )
}
// export const getServerSideProps = wrapper.getServerSideProps((context) => {
//   console.log(context.payload);
//   //dispath --> ex) LOAD_MY_INFO 
// })
export default Home;

