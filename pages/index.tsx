import type { NextPage } from 'next'
import styled from 'styled-components';
const Main = styled.main`
  /* 예시 */
  font-size: 150px;
  background-color: ${(props) => props.theme.colors.orange}
`
const Home: NextPage = () => {
  return (
    <Main>gogogo</Main>
  )
}

export default Home
