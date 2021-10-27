import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global-styles';
import { theme } from '../styles/theme';
// next js 여기를 먼저 렌더합니다.
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
/*
  위에 설정 사용 예시) 
 const ListContainer = styled.div`
    width: 50%;
    background-color: ${(props) => props.theme.colors.gray_background}
  @media (min-width: ${(props) => props.theme.breakPoint}) {
    width: 100%;
  }
`; */

export default MyApp
