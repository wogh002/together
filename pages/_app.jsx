import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global-styles';
import { theme } from '../styles/theme';
import wrapper from '../store/configureStore';
import Header from '../components/header';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default wrapper.withRedux(MyApp);