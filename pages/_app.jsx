import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global-styles';
import Head from 'next/head';
import { theme } from '../styles/theme';
import wrapper from '../store/configureStore';
function MyApp({ Component }) {
  // 제일 처음으로 next.js 는 여기를 방문한다.
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Together 😎</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <Component />
      </ThemeProvider>
    </>
  );
}
export default wrapper.withRedux(MyApp);